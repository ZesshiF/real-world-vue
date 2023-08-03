<script setup lang="ts">
import { ref } from 'vue';
import {type EventItem} from '@/type'
import EventService from '@/services/EventService';

const event = ref<EventItem | null>(null)

const props = defineProps({
    id: String  
})

// eslint-disable-next-line vue/no-setup-props-destructure
EventService.getEventById(Number(props.id)).then((res)=>{
    event.value = res.data
}).catch(error =>{
    console.error();
})

</script>

<template>
    <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
        <RouterLink :to="{name: 'event-detail', params: {id}}">Details</RouterLink>
        <RouterLink :to="{name: 'event-register', params: {id}}">Register</RouterLink>
        <RouterLink :to="{name: 'event-edit', params: {id}}">Edit</RouterLink>
    </div>

    <RouterView :event="event"></RouterView>

    </div>
</template>