import React, { type PropsWithChildren } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { Modal, Separator } from 'src/components'

const AcceptWrapper = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.pop_up.bg};
  padding-horizontal: 16px;
`

const Title = styled.Text`
  font-size: 16px;
  line-height: 17px;
  font-family: ${({ theme }) => theme.font.montserrat500};
  color: ${({ theme }) => theme.pop_up.title};
  padding-vertical: 12px;
  text-align: center;
`

const AcceptText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  padding-vertical: 15px;
  text-align: center;
`

const CancelText = styled(AcceptText)`
  padding-vertical: 0px;
  color: ${({ theme }) => theme.pop_up.cancel};
  text-align: center;
`

const Cancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.pop_up.bg};
  border-radius: 12px;
  padding-vertical: 12px;
  margin-top: 8px;
`

interface Props {
  title?: string
  acceptText?: string
  onAccept?: () => void
  onClose?: () => void
  visible: boolean
  acceptColor?: string
}

export const BottomAlert = ({
  onAccept,
  onClose,
  title,
  acceptText,
  acceptColor,
  children,
  visible,
}: PropsWithChildren<Props>) => {
  const { medium_blue } = useTheme()

  const color = acceptColor ?? medium_blue

  return (
    <Modal visible={visible} onClose={onClose}>
      <View>
        <AcceptWrapper>
          {children ? (
            children
          ) : (
            <>
              <Title>{title}</Title>
              <Separator />
              <TouchableOpacity onPress={onAccept}>
                <AcceptText style={{ color }}>{acceptText}</AcceptText>
              </TouchableOpacity>
            </>
          )}
        </AcceptWrapper>
        <Cancel onPress={onClose}>
          <CancelText>Отмена</CancelText>
        </Cancel>
      </View>
    </Modal>
  )
}
