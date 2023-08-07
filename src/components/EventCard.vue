<script setup lang="ts">
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
const prop = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<template>
  <RouterLink class="text-gray-700 no-underline" :to="{ name: 'event-detail', params: { id: event?.id } }">
    <div class="mb-4">
      <div class="event-card">
        <span>@{{ event?.time }} on {{ event?.date }}</span>
        <h4>{{ event?.title }}</h4>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
