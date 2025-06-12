import { instance } from '../instance'
import { handleApiError } from '../helpers'

export default {
  async getAll<TRes>(): Promise<TRes> {
    try {
      const response = await instance.get<TRes>('/products')
      return response.data
    } catch (err) {
      handleApiError(err, 'getAll')
    }
  },
  async getById<TRes>(id: number): Promise<TRes> {
    try {
      const response = await instance.get<TRes>(`/products/${id}`)
      return response.data
    } catch (err) {
      handleApiError(err, 'getAll')
    }
  },
}
