import React from 'react'
import { type TextInputProps } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { useToggle } from 'src/hooks'
import { ClosedEye, OpenedEye } from 'src/icons'

const Wrapper = styled.View`
  width: 100%;
`

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.font.montserrat500};
  margin-bottom: 8px;
`

const Input = styled.TextInput<{ isError: boolean }>`
  flex: 1;
  height: 40px;
  font-size: 16px;
  padding-vertical: 0;
  padding-horizontal: 10px;
  color: ${({ theme, isError }) =>
    isError ? theme.input.text.invalid : theme.input.text.valid};
  font-family: ${({ theme }) => theme.font.montserrat600};
`

const ErrorLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text.error};
  font-family: ${({ theme }) => theme.font.montserrat600};
  margin-left: 20px;
`

const InputWrapper = styled.View<{ isError: boolean }>`
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  border-color: ${({ theme, isError }) =>
    isError ? theme.input.border.invalid : theme.input.border.valid};
  background-color: ${({ theme, isError }) =>
    isError ? theme.input.bg.invalid : theme.input.bg.valid};
`

const HidePasswordButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`

interface Props extends TextInputProps {
  label: string
  error?: string
}

export const InputText = ({ label, error, ...props }: Props) => {
  const { input } = useTheme()
  const { visible, toggle } = useToggle(props.secureTextEntry)

  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper isError={!!error}>
        <Input
          {...props}
          secureTextEntry={visible}
          isError={!!error}
          placeholderTextColor={
            error ? input.placeholder.invalid : input.placeholder.valid
          }
        />
        {props.secureTextEntry && (
          <HidePasswordButton onPress={toggle}>
            {visible ? <OpenedEye /> : <ClosedEye />}
          </HidePasswordButton>
        )}
      </InputWrapper>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </Wrapper>
  )
}
