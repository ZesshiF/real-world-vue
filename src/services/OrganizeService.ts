import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { OrganizerItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<OrganizerItem[]>> {
    return apiClient.get<OrganizerItem[]>('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  getEventById(id: number): Promise<AxiosResponse<OrganizerItem>> {
    return apiClient.get<OrganizerItem>('organizers/' + id.toString())
  }
}
