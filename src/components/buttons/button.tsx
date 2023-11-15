import { type TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { Loader } from '../loader'

const Wrapper = styled.TouchableOpacity<{ isDisabled: boolean }>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.button.bg.disabled : theme.button.bg.active};
  border-radius: 12px;
  height: 40px;
`

const Title = styled.Text<{ isDisabled: boolean }>`
  font-size: 16px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.button.title.disabled : theme.button.title.active};
  font-family: ${({ theme }) => theme.font.montserrat500};
`

interface Props extends TouchableOpacityProps {
  title: string
  isDisabled?: boolean
  loading?: boolean
}

export const Button = ({ title, isDisabled, loading, ...props }: Props) => {
  return (
    <Wrapper {...props} disabled={isDisabled} isDisabled={!!isDisabled}>
      {loading ? (
        <Loader size="small" />
      ) : (
        <Title isDisabled={!!isDisabled}>{title}</Title>
      )}
    </Wrapper>
  )
}
