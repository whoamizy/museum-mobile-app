import { useCallback } from 'react'
import { type TouchableOpacityProps } from 'react-native'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export const Dismissable = (props: TouchableOpacityProps) => {
  const handleDismissKeyboard = useCallback(() => Keyboard.dismiss(), [])

  return <TouchableWithoutFeedback onPress={handleDismissKeyboard} {...props} />
}
