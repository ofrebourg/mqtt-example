<template>
  <div class="subscriptions">
    <v-card
      class="subscriptions__content"
      elevation="0"
      :disabled="!mqttStore.isConnected"
    >
      <div class="title">Topics</div>

      <v-text-field label="Topic" v-model="topic" />

      <v-btn @click="subscribe" :disabled="!topic.length">Subscribe</v-btn>

      <v-list class="subscriptions__content__list">
        <v-list-item
          v-for="(topic, i) in mqttStore.topics"
          :key="`topic-${i}`"
          class="subscriptions__content__list__item"
        >
          {{ topic }}
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { useMqttStore } from '@/stores/mqtt'

@Component
export default class MqttSubscriptions extends Vue {
  mqttStore = useMqttStore()

  topic = ''

  subscribe(): void {
    this.mqttStore.subscribe(this.topic)
    // this.topic = ''
  }
}
</script>

<style lang="scss" scoped>
.subscriptions__content {
  padding: 8px;
}

.subscriptions__content__list {
  margin-top: 20px;
}

.subscriptions__content__list__item {
  border-bottom: 1px solid rgba(#777, 0.3);
}
</style>
