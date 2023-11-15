import { type AxiosRequestConfig } from 'axios'

import { axiosBase } from '../axios'

export class BaseService {
  public static async fetch<T>(config: AxiosRequestConfig) {
    return await axiosBase.request<T>(config)
  }
}
