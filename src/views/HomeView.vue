<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import MqttConnectionParams from '@/components/MqttConnectionParams.vue'

@Component({
  components: {
    MqttConnectionParams
  }
})
export default class HomeView extends Vue {}
</script>

<template>
  <main>
    In order to use this app, you first need to log in to an MQTT broker.
    <mqtt-connection-params />
  </main>
</template>
