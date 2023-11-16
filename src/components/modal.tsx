import React from 'react'
import type {
  ModalProps as NativeModalProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Modal as RNModal } from 'react-native'
import { type GestureResponderEvent } from 'react-native-modal'
import styled from 'styled-components/native'

const ModalWrapper = styled(RNModal)`
  flex: 1;
`

const CenteredView = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.overlay};
`

const ModalContent = styled.Pressable`
  margin-top: auto;
  padding-horizontal: 8px;
  padding-bottom: 34px;
`

export interface ModalProps extends NativeModalProps {
  onClose?: () => void
  contentStyle?: StyleProp<ViewStyle>
}

export const Modal = ({
  children,
  onClose,
  contentStyle,
  ...rest
}: ModalProps) => (
  <ModalWrapper
    animationType="fade"
    transparent
    onRequestClose={onClose}
    statusBarTranslucent
    {...rest}>
    <CenteredView onPress={onClose}>
      <ModalContent
        onPress={(e: GestureResponderEvent) => e.stopPropagation()}
        style={contentStyle}>
        {children}
      </ModalContent>
    </CenteredView>
  </ModalWrapper>
)
