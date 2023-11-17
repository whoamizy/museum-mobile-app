import { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'

import { Header, Wrapper } from 'src/components'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'

const ScreenHeader = () => <Header title={t('collection.title')} hideBack />

export const CollectionScreen = () => {
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  return (
    <Wrapper>
      <Text>CollectionScreen</Text>
    </Wrapper>
  )
}
