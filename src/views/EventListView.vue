<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'
import { ref, watchEffect, type Ref, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import NProgress from 'nprogress'
import { onBeforeRouteUpdate } from 'vue-router'

const events: Ref<Array<EventItem>> = ref([])

const router = useRouter()

const totalEvent = ref<number>(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
})

// eslint-disable-next-line vue/no-setup-props-destructure, vue/no-dupe-keys
let limit = 3

const increaseLimit = () => {
  if (limit < 4) {
    limit++
    router.push({ name: 'event-list', query: { page: props.page, limit: limit } })
  }
}

const decreaseLimit = () => {
  if (limit > 1) {
    limit--
    router.push({ name: 'event-list', query: { page: props.page, limit: limit } })
  }
}

// eslint-disable-next-line vue/no-setup-props-destructure
EventService.getEvent(limit, props.page)
  .then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  EventService.getEvent(limit, toPage)
    .then((response: AxiosResponse<EventItem[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / limit)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1>
    Events For Good
    <button @click="increaseLimit">+</button>
    <button @click="decreaseLimit">-</button>
  </h1>

  <main class="flex flex-col item-center">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="flex w-72 justify-between">
      <RouterLink
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        class="text-left text-gray-700 no-underline"
      >
        Prev Page
      </RouterLink>
      <RouterLink
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="text-right text-gray-700 no-underline"
      >
        Next Page
      </RouterLink>
    </div>
  </main>
</template>

<style scoped></style>
