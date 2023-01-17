<template>
  <div class="connection-params">
    <div class="title">Connection</div>

    <v-alert color="info" dense>
      The parameters below come from <strong>mqtt.config.ts</strong>. You can
      leave them as they are or change the values to connect to your own broker.
    </v-alert>

    <div class="cp__content">
      <v-text-field label="Hostname" v-model="hostname" />

      <v-text-field label="Username" v-model="username" />

      <v-text-field label="Password" v-model="password" />

      <v-btn @click="connect">Connect</v-btn>
    </div>

    <v-alert
      v-if="connectionAttempted"
      :type="alertType"
      dense
      class="cp__alert"
    >
      {{ alertMessage }}
      <div v-if="mqttStore.isConnected">
        Go to the <a href="/mqtt">MQTT</a> tab to continue.
      </div>
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import MqttConfig from '@/mqtt.config'
import { useMqttStore } from '@/stores/mqtt'

@Component
export default class MqttConnectionParams extends Vue {
  mqttStore = useMqttStore()

  hostname = MqttConfig.hostname
  username = MqttConfig.username
  password = MqttConfig.password

  connect(): void {
    this.mqttStore.connect(this.hostname, this.username, this.password)
  }

  get connectionAttempted(): boolean {
    return this.mqttStore.isConnected || !!this.mqttStore.connectionError
  }

  get alertType(): 'error' | 'success' {
    return this.mqttStore.isConnected ? 'success' : 'error'
  }

  get alertMessage(): string {
    if (this.mqttStore.isConnected) {
      return 'Connected'
    }

    return this.mqttStore.connectionError || 'Unknown error'
  }
}
</script>

<style lang="scss" scoped>
.connection-params {
  padding: 12px 16px;
  border: 1px solid #777;
  border-radius: 4px;
}

.cp__content {
  margin-bottom: 16px;
}

.cp__alert {
  margin-bottom: 0px;
}
</style>
