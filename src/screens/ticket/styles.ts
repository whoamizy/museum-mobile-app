import styled from 'styled-components/native'

import { Button } from 'src/components'

export const LoaderWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.primary};
  margin-top: 20px;
`

export const Address = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat500};
  color: ${({ theme }) => theme.text.third};
  margin-top: 5px;
`

export const Price = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.accent};
  margin-top: 5px;
  margin-bottom: 20px;
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.primary};
  margin-top: 20px;
`

export const StyledButton = styled(Button)`
  padding-horizontal: 16px;
`

export const DateAndTime = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.accent};
  margin-vertical: 20px;
`
