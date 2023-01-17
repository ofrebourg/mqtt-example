<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import PageHeader from './components/PageHeader.vue'

@Component({
  components: { PageHeader }
})
export default class App extends Vue {}
</script>

<template>
  <v-app>
    <header>
      <img alt="logo" class="logo" src="/logo.svg" />

      <div class="wrapper">
        <page-header msg="MQTT Example" />
        <!-- <h1 class="yellow">MQTT Exercise</h1> -->

        <nav>
          <router-link to="/">Connect</router-link>
          <router-link to="/mqtt">MQTT</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </v-app>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  gap: 1rem;
  place-items: flex-start;
  margin-bottom: 20px;
}

.logo {
  $logo-size: 50px;
  width: $logo-size;
  height: $logo-size;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
