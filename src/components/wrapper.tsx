import React from 'react'
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const BackgroundView = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.background};
  flex: 1;
`

export const Wrapper = ({ children, ...props }: SafeAreaViewProps) => {
  return <BackgroundView {...props}>{children}</BackgroundView>
}
