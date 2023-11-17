import styled from 'styled-components/native'

export const LoaderWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const StyledImage = styled.Image`
  width: 100px;
  height: 70px;
  border-radius: 6px;
`

export const TicketCard = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const ExhibitionInfo = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 5px;
`

export const Address = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.montserrat500};
  color: ${({ theme }) => theme.text.third};
  margin-bottom: 5px;
`

export const Price = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.accent};
`

export const DateAndTime = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.accent};
  text-align: right;
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
