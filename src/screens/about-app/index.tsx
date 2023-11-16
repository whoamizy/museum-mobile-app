import { useLayoutEffect } from 'react'
import styled from 'styled-components/native'

import { Button, Container, Header, Wrapper } from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'

import { AboutAppContent } from './content'

const Content = styled.View`
  height: 100%;
  justify-content: space-between;
`

const ScreenHeader = () => <Header title={t('aboutApp.title')} hideBack />

export const AboutAppScreen = () => {
  const paddingBottom = usePaddingBottom()
  const { setOptions } = useNavigation()

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
          <Button style={{ paddingBottom }} title={t('general.exit')} />
        </Content>
      </Container>
    </Wrapper>
  )
}
