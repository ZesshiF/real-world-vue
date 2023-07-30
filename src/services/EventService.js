import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import { EventItem } from '@/type'
const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvent(): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('/events')
    }
}