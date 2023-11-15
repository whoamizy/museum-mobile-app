import styled, { css } from 'styled-components/native'

const textStyles = css`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
`

export const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
`

export const Inputs = styled.View`
  gap: 24px;
`

export const InfoContent = styled.View`
  align-items: center;
  margin-vertical: 20px;
`

export const Logo = styled.Image`
  border-radius: 6px;
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
`

export const Question = styled.Text`
  ${textStyles};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 5px;
`

export const CallToAction = styled.Text`
  ${textStyles};
  color: ${({ theme }) => theme.text.accent};
`
