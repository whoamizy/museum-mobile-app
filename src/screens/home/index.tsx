import { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'

import { Wrapper } from 'src/components'
import { useNavigation } from 'src/navigation/hooks'

import { Header } from './header'

const ScreenHeader = () => <Header />

export const HomeScreen = () => {
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  return (
    <Wrapper>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </Wrapper>
  )
}
