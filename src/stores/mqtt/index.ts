import * as mqtt from 'mqtt/dist/mqtt.min'
import { acceptHMRUpdate, defineStore } from 'pinia'

import MqttConfig from '@/mqtt.config'

// TODO: instead of defining new MqttClient and IClientOptions types, use the ones from 'mqtt'.
// However this is currently failing for the same reason as in src/mqtt.config.ts
type MqttClient = any
type IClientOptions = any

type Message = {
  topic: string
  body: string
}

interface MqttState {
  mqttServerClient: MqttClient | null
  connectionError: string | null
  topics: string[]
  receivedMessages: Message[]
}

const initState: MqttState = {
  mqttServerClient: null,
  connectionError: null,
  topics: [],
  receivedMessages: []
}

export const useMqttStore = defineStore('mqtt', {
  state: () => {
    return { ...initState }
  },
  actions: {
    connect(hostname: string, username: string, password: string): void {
      // clear error & client
      this.mqttServerClient = null
      this.connectionError = null
      this.topics = []
      this.receivedMessages = []

      const updatedConfig: IClientOptions = {
        ...MqttConfig,
        hostname,
        username,
        password
      }

      // create a client
      this.mqttServerClient = mqtt.connect(updatedConfig)

      this.mqttServerClient.on('connect', () => {
        console.log(`connected to mqtt  ${new Date()}`)
      })

      this.mqttServerClient.on('error', (err: any) => {
        this.connectionError = `Failed to connect to ${hostname}`
        console.error('Failed to connect', err)
      })

      this.mqttServerClient.on('message', (topic: string, message: Buffer) => {
        this.receivedMessages.push({
          topic,
          body: message.toString()
        })
      })
    },
    subscribe(topic: string): void {
      this.mqttServerClient.subscribe(topic, (err: any) => {
        if (err) {
          console.error('failed to subscribe to topic', topic, err)
        } else {
          this.topics.push(topic)
        }
      })
    },
    publish(topic: string, body: string): void {
      this.mqttServerClient.publish(topic, body, (err: any) => {
        if (err) {
          console.error('failed to publish to topic', topic, err)
        }
      })
    }
  },
  getters: {
    isConnected: state => state.mqttServerClient?.connected === true
  }
})

// to enable hot module reload for this store (which requires es2020, es2022 or esnext)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMqttStore, import.meta.hot))
}
