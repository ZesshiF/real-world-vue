<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="network-error">
    <h1>Uh-oh!</h1>
    <h3>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="router.go(-1)">Click here</a>
      to try again
    </h3>
  </div>
</template>
