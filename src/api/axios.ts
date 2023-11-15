import Config from 'react-native-config'
import Toast from 'react-native-toast-message'
import axios, { type AxiosError } from 'axios'
import isEmpty from 'lodash/isEmpty'
import qs from 'qs'

import { PersistData } from 'src/enums'
import { t } from 'src/i18n'
import { storage } from 'src/utils'

export const axiosBase = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true })
  },
  transformRequest(data = {}) {
    const { isJson = true, ...body } = data

    if (isEmpty(body)) return

    if (!isJson) {
      const formData = new FormData()

      for (const key in body) {
        if (Array.isArray(body[key])) {
          for (const item of body[key]) {
            formData.append(key, item)
          }
        } else {
          formData.append(key, body[key])
        }
      }

      return formData
    }

    return JSON.stringify(body)
  },
})

// eslint-disable-next-line promise/prefer-await-to-callbacks
axiosBase.interceptors.response.use(undefined, (err) => {
  const { message, config, response } = err as AxiosError
  const shouldShowToast = config?.shouldShowToast ?? true
  const status = response?.status ?? 0

  if (status >= 500) {
    Toast.show({ type: 'error', text1: t('general.error') })

    return Promise.reject(err)
  }

  if (shouldShowToast) {
    Toast.show({ type: 'error', text1: t('general.error') })

    return Promise.reject(err)
  }

  if (!(message.includes('timeout') || message.includes('Network Error'))) {
    return Promise.reject(err)
  }

  return Promise.reject(err)
})

axiosBase.interceptors.request.use((config) => {
  const token = storage.getString(PersistData.TOKEN)

  const auth = token ? `Bearer ${token}` : ''

  config.headers.set('Authorization', auth)

  return config
})
