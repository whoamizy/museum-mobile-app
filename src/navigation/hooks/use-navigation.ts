import { useCallback, useRef } from 'react'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'

import { type Navigation, type Push } from '../types'

export const useNavigation = (): Navigation => {
  const { push: defaultPush, ...rest } = useNativeNavigation<Navigation>()
  const isNavigating = useRef(false)

  const push: Push = useCallback(
    (...args) => {
      if (isNavigating.current) return
      isNavigating.current = true
      defaultPush(...args)

      setTimeout(() => {
        isNavigating.current = false
      }, 1000)
    },
    [defaultPush],
  )

  return {
    push,
    ...rest,
  }
}
