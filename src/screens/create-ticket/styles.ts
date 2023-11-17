import styled from 'styled-components/native'

import { ITEM_WIDTH } from 'src/utils'

export const Content = styled.View`
  height: 100%;
  justify-content: space-between;
`

export const ChipWrapper = styled.View<{ hasMargin: boolean }>`
  margin-left: ${({ hasMargin }) => (hasMargin ? '8px' : '0px')};
`

export const LoaderWrapper = styled.View`
  width: ${ITEM_WIDTH}px;
  align-items: center;
  justify-content: center;
  padding-vertical: 11px;
`

export const EmptyWrapper = styled.View`
  width: ${ITEM_WIDTH}px;
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
`

export const EmptyText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.accent_light};
`

export const CalendarWrapper = styled.View`
  margin-vertical: 20px;
`

export const Info = styled.View`
  margin-top: 20px;
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
