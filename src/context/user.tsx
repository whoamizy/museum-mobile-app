import React, {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import { useMMKVString } from 'react-native-mmkv'
import SplashScreen from 'react-native-splash-screen'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { noop } from 'lodash'

import { useGetMe } from 'src/api'
import { PersistData } from 'src/enums'
import type { User } from 'src/types'
import { storage } from 'src/utils'

interface Values {
  user: User | null
  logout(): void
}

const defaultValue: Values = {
  user: null,
  logout: noop,
}

const Context = React.createContext(defaultValue)

export const useUser = () => {
  const u = React.useContext(Context)

  if (!u) {
    throw new Error('useUser was used outside of UserContextProvider')
  }

  return u
}

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient()
  const [storageToken] = useMMKVString(PersistData.TOKEN, storage)

  useEffect(() => {
    queryClient.setDefaultOptions({ queries: { enabled: false } })
    const token = storage.getString(PersistData.TOKEN)

    if (!token) {
      SplashScreen.hide()
    }

    queryClient.setDefaultOptions({ queries: { enabled: undefined } })
  }, [queryClient])

  const logout = useCallback(() => {
    queryClient.setQueryData(['users/me'], () => null)
    queryClient.clear()

    return storage.delete(PersistData.TOKEN)
  }, [queryClient])

  const { data, error, isError } = useGetMe({
    queryKey: ['users/me'],
    enabled: !!storageToken,
  })

  if (isError) {
    const err = error as AxiosError

    if (err?.response?.status === 401) {
      logout()
    }
  }

  if (data) {
    SplashScreen.hide()
  }

  const contextVal: Values = useMemo(
    () => ({
      user: data ?? null,
      logout,
    }),
    [data, logout],
  )

  return <Context.Provider value={contextVal}>{children}</Context.Provider>
}
