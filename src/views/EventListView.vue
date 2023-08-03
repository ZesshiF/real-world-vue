<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from "@/type";
import { computed, ref, watchEffect } from "vue";
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';


const events = ref<Array<EventItem>>([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const hasNextPage = computed(() =>{
  //First calculate the total page
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page.valueOf() < totalPages
})

watchEffect(() =>{
  EventService.getEvent(2, props.page).then((response: AxiosResponse<EventItem[]>) =>{
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})


</script>

<template>
      <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    
    <div class="pagination">

      <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1" id="page-prev">
        Prev Page
      </RouterLink>
      <RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next" v-if="hasNextPage" id="page-next">
        Next Page
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
    display: flex;
    width: 290px;
  }

  #page-prev {
    text-align: left;
  }
  
  #page-next {
    text-align: right;
  }
</style>