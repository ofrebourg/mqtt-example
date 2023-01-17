<template>
  <div class="mqtt">
    <v-alert v-if="!mqttStore.isConnected" type="error">
      You need to be connected in order to subscribe to topics and publish
      messages.
    </v-alert>

    <div class="mqtt__content">
      <div class="mqtt__content__column1">
        <div class="mqtt__content__column1___subscriptions">
          <mqtt-subscriptions />
        </div>
      </div>

      <div class="mqtt__content__column2">
        <div class="mqtt__content__column2__publish">
          <mqtt-messages />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import MqttMessages from '@/components/MqttMessages.vue'
import MqttSubscriptions from '@/components/MqttSubscriptions.vue'
import { useMqttStore } from '@/stores/mqtt'

@Component({
  components: {
    MqttMessages,
    MqttSubscriptions
  }
})
export default class Mqtt extends Vue {
  mqttStore = useMqttStore()
}
</script>

<style lang="scss" scoped>
.mqtt__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.mqtt__content__column1,
.mqtt__content__column2 {
  display: grid;
  gap: 16px;
}
</style>
