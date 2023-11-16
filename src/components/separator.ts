import { styled } from 'styled-components/native'

export const Separator = styled.View<{ vertical?: boolean }>`
  width: ${({ vertical }) => (vertical ? '1px' : '100%')};
  height: ${({ vertical }) => (vertical ? '100%' : '1px')};
  background-color: ${({ theme }) => theme.separator};
`
