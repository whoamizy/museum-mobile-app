import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

export const useAnimatedKeyboard = (duration = 150) => {
  const [visible, setVisible] = useState(false)

  const height = useSharedValue(0)

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (event) => {
      height.value = withTiming(event.endCoordinates.height, { duration })
      setVisible(true)
    })

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      height.value = withTiming(0, { duration })
      setVisible(false)
    })

    return () => {
      showSub.remove()
      hideSub.remove()
    }
  }, [duration, height])

  return {
    visible,
    height,
  }
}
