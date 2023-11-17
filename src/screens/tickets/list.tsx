import React, { useCallback, useState } from 'react'
import {
  FlatList,
  type ListRenderItem,
  RefreshControl,
  StyleSheet,
} from 'react-native'

import { type Ticket } from 'src/types'
import { queryClient } from 'src/utils'

import { TicketsItem } from './item'

interface Props {
  tickets: Ticket[]
}

export const TicketsList = ({ tickets }: Props) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({ queryKey: ['tickets'], type: 'active' })
    setRefreshing(false)
  }

  const renderItem: ListRenderItem<Ticket> = useCallback(
    ({ item }) => <TicketsItem ticket={item} />,
    [],
  )

  return (
    <FlatList
      data={tickets}
      renderItem={renderItem}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    gap: 8,
    paddingHorizontal: 16,
  },
})
