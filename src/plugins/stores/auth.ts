import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    register( username: string, password: string, firstname: string, lastname: string) {
      this.username = username
      this.password = password
      this.firstname = firstname
      this.lastname = lastname
      this.token = ''
    },
    login(username: string, password: string) {
       if (this.username === username && this.password === password) {
        this.token = 'fake-token'
        return true
      }
      return false
    },
    logout() {
      this.token = ''
      this.username = ''
      this.password = ''
      this.firstname = ''
      this.lastname = ''
    },
  },
  persist: true,
})
