import { useCallback, useLayoutEffect } from 'react'
import styled, { useTheme } from 'styled-components/native'

import { BottomAlert, Button, Container, Header, Wrapper } from 'src/components'
import { useUser } from 'src/context'
import { useToggle } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'

import { AboutAppContent } from './content'

const Content = styled.View`
  height: 100%;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  padding-bottom: 16px;
`

const ScreenHeader = () => <Header title={t('aboutApp.title')} hideBack />

export const AboutAppScreen = () => {
  const { setOptions, replace } = useNavigation()
  const { visible, open, close } = useToggle()
  const { logout } = useUser()
  const { red_dark } = useTheme()

  const onAccept = useCallback(() => {
    replace(ROUTES.AUTH_NAVIGATOR)
    logout()
  }, [logout, replace])

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  return (
    <Wrapper>
      <Container>
        <Content>
          <AboutAppContent />
          <StyledButton onPress={open} title={t('general.exit')} />
        </Content>
      </Container>
      <BottomAlert
        title={t('general.exitQuestion')}
        visible={visible}
        onClose={close}
        acceptColor={red_dark}
        acceptText={t('general.exit')}
        onAccept={onAccept}
      />
    </Wrapper>
  )
}
