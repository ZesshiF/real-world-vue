<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <header class="max-h-screen leading-normal">
    <h1>642115038 Yotsawat Lekwongthansin</h1>
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'add-event' }">New Event</router-link>
      <RouterLink to="/CategoryOrganizer">Category&Organizer</RouterLink>
      <RouterLink to="/student">Student</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>

body {
background-color: lightblue;
}

#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h4 {
  font-size: 20px;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
