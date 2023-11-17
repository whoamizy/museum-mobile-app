import styled, { css } from 'styled-components/native'

import { ITEM_WIDTH } from 'src/utils'

export const SectionTitleWrapper = styled.View`
  background-color: ${({ theme }) => theme.background};
`

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 8px;
`

export const Card = styled.View`
  width: ${ITEM_WIDTH}px;
  flex-direction: row;
  gap: 8px;
`

export const ImageWrapper = styled.Pressable`
  background-color: ${({ theme }) => theme.red_light};
  border-radius: 12px;
  overflow: hidden;
`

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`

export const Info = styled.View`
  flex: 1;
`

const textCss = css`
  font-size: 14px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.font.montserrat600};
`

export const Author = styled.Text`
  ${textCss};
`

export const Title = styled.Text`
  ${textCss};
  font-size: 16px;
  color: ${({ theme }) => theme.red_dark};
  font-family: ${({ theme }) => theme.font.montserrat700};
`

export const Year = styled.Text`
  ${textCss};
`

export const LoaderWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const EmptyWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const EmptyText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.accent_light};
`
