 <script setup lang="ts">
      import type { OrganizerItem } from '@/type'
      import type { PropType } from 'vue'
      const prop = defineProps({
        organize: {
          type: Object as PropType<OrganizerItem>,
          require: true
        }
      })
 </script>


<template>
  <div class="event-class">
    <div class="event-card">
      <span>{{ organize?.id}} {{ organize?.location }}</span>
      <h4>{{ organize?.organizer }}</h4>
    </div>
  </div>
</template>


<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;

  font-size: 15px;
  text-align: right;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
