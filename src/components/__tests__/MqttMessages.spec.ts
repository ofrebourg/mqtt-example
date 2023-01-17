import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { defineStore } from 'pinia'
import { describe, expect, it } from 'vitest'
import Vue from 'vue'
import Vuetify from 'vuetify'

import MqttMessages from '../MqttMessages.vue'

// const useMqttStore = defineStore('mqtt', {
//   state: () => ({
//     receivedMessages: [
//       {
//         topic: 'test',
//         body: '1234'
//       }
//     ]
//   })
// })

// We need to use a global Vue instance, otherwise Vuetify will complain about
// read-only attributes.
// This could also be done in a custom Jest-test-setup file to execute for all tests.
// More info: https://github.com/vuetifyjs/vuetify/issues/4068
//            https://vuetifyjs.com/en/getting-started/unit-testing
Vue.use(Vuetify)

describe('MqttMessages', () => {
  it('renders properly', () => {
    // const wrapper = mount(MqttMessages, { pinia: createTestingPinia() })
    const wrapper = mount(MqttMessages, {
      vuetify: new Vuetify(),
      pinia: createTestingPinia({
        createSpy() {
          return () => {
            return Promise.resolve()
          }
        },
        initialState: {
          receivedMessages: [
            {
              topic: 'test',
              body: '1234'
            }
          ]
        }
      })
    })

    expect(wrapper.text()).toContain('1234')
  })
})
