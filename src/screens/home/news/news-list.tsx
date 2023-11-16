import React, { useCallback } from 'react'
import { FlatList, type ListRenderItem, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { useGetAllNews } from 'src/api'
import { Container } from 'src/components'
import { t } from 'src/i18n'
import { type NewsItem } from 'src/types'
import { ITEM_WIDTH } from 'src/utils'

import { NewsCard } from './news-card'

const Wrapper = styled.View`
  margin-top: 20px;
`

const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 20px;
`

const EmptyWrapper = styled.View`
  width: ${ITEM_WIDTH}px;
  min-height: 155px;
  align-items: center;
  justify-content: center;
`

const EmptyText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.montserrat700};
  color: ${({ theme }) => theme.text.accent_light};
`

const ListEmptyComponent = (
  <EmptyWrapper>
    <EmptyText>{t('news.emptyList')}</EmptyText>
  </EmptyWrapper>
)

export const NewsList = () => {
  const { data: news } = useGetAllNews()

  const renderItem: ListRenderItem<NewsItem> = useCallback(
    ({ item }) => <NewsCard item={item} />,
    [],
  )

  return (
    <Wrapper>
      <Container>
        <Title>{t('news.title')}</Title>
      </Container>
      <FlatList
        horizontal
        pagingEnabled
        data={news}
        renderItem={renderItem}
        decelerationRate="fast"
        snapToInterval={ITEM_WIDTH + 8}
        contentContainerStyle={styles.content}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: 8,
    paddingHorizontal: 16,
  },
})
