<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from "@/type";
import axios from 'axios'
import EventService from '@/services/EventService'


import { ref } from "vue";
const events: Ref<Array<EventItem[]>> = ref([])

EventService.getEvent().then((response) =>{
  events.value = response.data
})
</script>

<template>
      <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </main>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>