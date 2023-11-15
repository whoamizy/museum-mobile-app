import React from 'react'
import { ActivityIndicator, type ActivityIndicatorProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export const Loader = (props: ActivityIndicatorProps) => {
  const { white } = useTheme()

  return <ActivityIndicator size="large" color={white} {...props} />
}
