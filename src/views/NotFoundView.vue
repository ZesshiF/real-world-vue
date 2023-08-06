<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Opp!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink :to="{ name: 'event-list' }">Back to home page</RouterLink>
</template>
