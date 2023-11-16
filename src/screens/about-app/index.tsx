import { useLayoutEffect } from 'react'
import { Text } from 'react-native'

import { Header, Wrapper } from 'src/components'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'

const ScreenHeader = () => <Header title={t('aboutApp.title')} hideBack />

export const AboutAppScreen = () => {
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  return (
    <Wrapper>
      <Text>AboutAppScreen</Text>
    </Wrapper>
  )
}
