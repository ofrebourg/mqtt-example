// TODO: fix this test. Failing to load @pinia/testing at the moment...

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { defineStore } from 'pinia'
import { describe, expect, it } from 'vitest'

import MqttMessages from '../MqttMessages.vue'

const useMqttStore = defineStore('mqtt', {
  state: () => ({
    receivedMessages: [
      {
        topic: 'test',
        body: '1234'
      }
    ]
  })
})

describe('MqttMessages', () => {
  it('renders properly', () => {
    // const wrapper = mount(MqttMessages, { pinia: createTestingPinia() })
    const wrapper = mount(MqttMessages, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              receivedMessages: [
                {
                  topic: 'test',
                  body: '1234'
                }
              ]
            }
          })
        ]
      }
    })
    expect(wrapper.text()).toContain('1234')
  })
})
