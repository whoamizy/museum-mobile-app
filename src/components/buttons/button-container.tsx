import React, { type PropsWithChildren } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useAnimatedKeyboard } from 'src/hooks'
import { isIOS } from 'src/utils'

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  const safeZone = useSafeAreaInsets()
  const { height } = useAnimatedKeyboard()
  const animatedStyles = useAnimatedStyle(() => {
    return {
      paddingBottom: withTiming(
        isIOS ? height.value - safeZone.bottom : height.value,
        {
          duration: 100,
          easing: Easing.linear,
        },
      ),
    }
  })

  return <Animated.View style={animatedStyles}>{children}</Animated.View>
}
