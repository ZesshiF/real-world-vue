import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type {StudentItem } from "@/type";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://dv-student-backend-2019.appspot.com/students?fbclid=IwAR3xYRz9fFXf0Lf6zEwxGmW0Ajx-nwLDImG4ajxIFiaDmFjCuDIHsJXXQ0w',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudent(): Promise<AxiosResponse<StudentItem[]>>{
        return apiClient.get<StudentItem[]>('/students')
    }
}