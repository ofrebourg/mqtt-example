import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Vue from 'vue'
import Vuetify from 'vuetify'

import MqttMessages from '../MqttMessages.vue'

// We need to use a global Vue instance, otherwise Vuetify will complain about
// read-only attributes.
// This could also be done in a custom Jest-test-setup file to execute for all tests.
// More info: https://github.com/vuetifyjs/vuetify/issues/4068
//            https://vuetifyjs.com/en/getting-started/unit-testing
Vue.use(Vuetify)

describe('MqttMessages', () => {
  it('renders properly', () => {
    const wrapper = mount(MqttMessages, {
      vuetify: new Vuetify(),
      pinia: createTestingPinia({
        createSpy() {
          return () => {
            return Promise.resolve()
          }
        },
        initialState: {
          mqtt: {
            receivedMessages: [
              {
                topic: 'test',
                body: '1234'
              }
            ]
          }
        }
      })
    })

    expect(wrapper.text()).toContain('1234')
  })
})
