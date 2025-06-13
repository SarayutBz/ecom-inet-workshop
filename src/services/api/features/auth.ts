import { instance } from '../instance'
import { handleApiError } from '../helpers'
import {type User } from './user'

export default {
  async getAll<TRes>(): Promise<TRes> {
    try {
      const response = await instance.get<TRes>('/users')
      return response.data
    } catch (err) {
      handleApiError(err, 'getAllUsers')
    }
  },

  async getById<TRes>(id: number): Promise<TRes> {
    try {
      const response = await instance.get<TRes>(`/users/${id}`)
      return response.data
    } catch (err) {
      handleApiError(err, 'getUserById')
    }
  },
}

    export async function loginUser(username: string, password: string): Promise<string> {
    try {
        const response = await instance.post<{ token: string }>('auth/login', { username, password })
        return response.data.token
    } catch (error) {
        console.error('Login failed:', error)
        throw error
    }
    }

    export async function getUserByUsername(username: string): Promise<User> {
  try {
    const response = await instance.get<User[]>('/users')
    const user = response.data.find(user => user.username === username)
    if (!user) throw new Error('User not found')
    return user
  } catch (error) {
    console.error('Fetching user by username failed:', error)
    throw error
  }
}