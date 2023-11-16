import React from 'react'
import styled from 'styled-components/native'

import { Container, Separator } from 'src/components'
import { useUser } from 'src/context'
import { t } from 'src/i18n'
import { statusBarHeight } from 'src/utils'

const Wrapper = styled.View`
  padding-vertical: 16px;
  background-color: ${({ theme }) => theme.background};
`

const Greeting = styled.Text`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.primary};
`

export const Header = () => {
  const { user } = useUser()

  return (
    <>
      <Wrapper style={{ paddingTop: statusBarHeight + 16 }}>
        <Container>
          <Greeting numberOfLines={1}>
            {t('general.hello', { name: user?.username })}
          </Greeting>
        </Container>
      </Wrapper>
      <Separator />
    </>
  )
}
