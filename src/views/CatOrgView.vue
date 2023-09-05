<script setup lang="ts">
import CatOrgCard from '../components/CatOrg.vue'
import type { OrganizerItem } from '@/type'
import { ref, type Ref, computed } from 'vue'
import OrganizeService from '@/services/OrganizeService'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

const organizers = ref<Array<OrganizerItem>>([])
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

OrganizeService.getEvent(4, props.page)
  .then((response: AxiosResponse<OrganizerItem[]>) => {
    organizers.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  OrganizeService.getEvent(4, toPage)
    .then((response: AxiosResponse<OrganizerItem[]>) => {
      organizers.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 4)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="events">
    <CatOrgCard v-for="organize in organizers" :key="organize.id" :event="organize"></CatOrgCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
