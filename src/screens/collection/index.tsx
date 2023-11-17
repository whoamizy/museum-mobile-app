import { useLayoutEffect, useState } from 'react'
import {
  RefreshControl,
  SectionList,
  type SectionListRenderItem,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'
import { useTheme } from 'styled-components/native'

import { useGetAllCollection } from 'src/api'
import { Header, Loader, Wrapper } from 'src/components'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { type Collection, type SectionHeaderType } from 'src/types'
import { queryClient } from 'src/utils'

import { CollectionCard } from './card'
import {
  EmptyText,
  EmptyWrapper,
  LoaderWrapper,
  SectionTitle,
  SectionTitleWrapper,
} from './styles'

const ScreenHeader = () => <Header title={t('collection.title')} hideBack />

const renderSectionHeader: SectionHeaderType = ({ section }) => (
  <SectionTitleWrapper>
    <SectionTitle>{section.title}</SectionTitle>
  </SectionTitleWrapper>
)

const EmptyListComponent = (
  <EmptyWrapper>
    <EmptyText>{t('collection.notFound')}</EmptyText>
  </EmptyWrapper>
)

const renderItem: SectionListRenderItem<Collection> = ({ item }) => (
  <CollectionCard item={item} />
)

export const CollectionScreen = () => {
  const { red_dark } = useTheme()
  const { setOptions } = useNavigation()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({ queryKey: ['collection'], type: 'active' })
    setRefreshing(false)
  }

  const { data: collection, isLoading } = useGetAllCollection()

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  if (isLoading || !collection) {
    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader color={red_dark} />
        </LoaderWrapper>
      </Wrapper>
    )
  }

  const grouped = _.chain(collection)
    .groupBy((item) => item.collectionName.name)
    .map((data, title) => ({ title, data }))
    .value()
    .map((el, index) => ({ ...el, index }))

  return (
    <Wrapper>
      <SectionList
        sections={grouped}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        stickySectionHeadersEnabled
        ListEmptyComponent={EmptyListComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})
