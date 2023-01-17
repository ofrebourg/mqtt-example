<template>
  <div class="messages">
    <v-card
      class="messages__content"
      elevation="0"
      :disabled="!mqttStore.isConnected"
    >
      <div class="title">Messages</div>

      <v-text-field label="Topic" v-model="topic" />

      <v-textarea label="Message Body" v-model="body" />

      <v-btn @click="publish" :disabled="!topic || !body">Publish</v-btn>

      <div class="messages__content__list">
        <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Message</th>
                <th class="text-left">Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in mqttStore.receivedMessages"
                :key="`table-msg-${index}`"
              >
                <td>{{ item.body }}</td>
                <td>{{ item.topic }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { useMqttStore } from '@/stores/mqtt'

@Component
export default class MqttMessages extends Vue {
  mqttStore = useMqttStore()

  topic: string | null = null
  body = ''

  publish(): void {
    if (!this.topic) {
      return
    }

    this.mqttStore.publish(this.topic, this.body)
  }
}
</script>

<style lang="scss" scoped>
.messages__content {
  padding: 8px;
}

.messages__content__list {
  margin-top: 20px;
}

.messages__content__list__item {
  border-bottom: 1px solid rgba(#777, 0.3);
}
</style>
