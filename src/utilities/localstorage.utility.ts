import { Person } from "@/models"

export const setLocalStorage = (key: string, value: Person) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}