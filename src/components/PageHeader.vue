<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageHeader extends Vue {
  @Prop()
  msg!: string
}
</script>

<template>
  <div class="greetings">
    <h1 class="yellow">{{ msg }}</h1>
    <h3>
      A little project using
      <a target="_blank" href="https://vitejs.dev/">Vite</a>,
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>,
      <a target="_blank" href="https://vuetifyjs.com/">Vuetify</a>
      and
      <a target="_blank" href="https://www.npmjs.com/package/mqtt">mqtt.js</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  top: -10px;
}

h3 {
  font-size: 1rem;
  top: -16px;
}

.greetings h1,
.greetings h3 {
  display: block;
  text-align: left;
}
</style>
