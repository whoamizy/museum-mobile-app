import { useLayoutEffect, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

import { Wrapper } from 'src/components'
import { useNavigation } from 'src/navigation/hooks'
import { queryClient } from 'src/utils'

import { ExhibitionsList } from './exhibitions'
import { Header } from './header'
import { NewsList } from './news'

const ScreenHeader = () => <Header />

export const HomeScreen = () => {
  const { setOptions } = useNavigation()
  const [refreshing, setRefreshing] = useState(false)

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({ queryKey: ['news'], type: 'active' })
    queryClient.refetchQueries({ queryKey: ['exhibitions'], type: 'active' })
    setRefreshing(false)
  }

  return (
    <Wrapper>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <NewsList />
        <ExhibitionsList />
      </ScrollView>
    </Wrapper>
  )
}
