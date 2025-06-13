// plugins/stores/auth.ts
import { defineStore } from 'pinia'
import { loginUser,  getUserByUsername } from '@/services/api/features/auth'
import { instance } from '@/services/api/instance'
import {type User } from '@/services/api/features/user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    username: '',
    profile: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login(username: string, password: string): Promise<boolean> {
      try {
        const token = await loginUser(username, password)
        this.token = token
        this.username = username

        const profile = await getUserByUsername(username)
        this.profile = profile

        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    },

    logout() {
      this.token = ''
      this.username = ''
      this.profile = null
      delete instance.defaults.headers.common['Authorization']
    },
  },
  persist: true,
})