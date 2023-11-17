import { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { useRoute } from '@react-navigation/native'
import format from 'date-fns/format'
import { useTheme } from 'styled-components/native'

import { useDeleteTicket, useGetOneTicket } from 'src/api'
import {
  BottomAlert,
  Container,
  ExhibitionSlider,
  Loader,
  Separator,
  Wrapper,
} from 'src/components'
import { usePaddingBottom, useToggle } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type TicketProp } from 'src/navigation/types'
import { queryClient } from 'src/utils'

import {
  Address,
  DateAndTime,
  Description,
  LoaderWrapper,
  Price,
  StyledButton,
  Title,
} from './styles'

export const TicketScreen = () => {
  const paddingBottom = usePaddingBottom({ extraOffset: 8 })
  const { red_dark } = useTheme()
  const [refreshing, setRefreshing] = useState(false)
  const { replace } = useNavigation()
  const [isRemoving, setIsRemoving] = useState(false)
  const { visible, open, close } = useToggle()

  const {
    params: { id },
  } = useRoute<TicketProp>()

  const { data: ticket, isLoading } = useGetOneTicket(id)
  const { mutateAsync: remove } = useDeleteTicket()

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({
      queryKey: ['tickets/id', { id }],
      type: 'active',
    })
    setRefreshing(false)
  }

  const deleteHandler = async () => {
    setIsRemoving(true)
    await remove(id, {
      onSuccess: () => {
        setIsRemoving(false)
        Toast.show({ type: 'success', text1: t('tickets.item.successDelete') })
        queryClient.refetchQueries({
          queryKey: ['tickets'],
          type: 'active',
        })
        replace(ROUTES.TAB)
      },
      onError: () => {
        Toast.show({ type: 'error', text1: t('tickets.item.errorDelete') })
      },
    })
  }

  if (isLoading || !ticket) {
    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader color={red_dark} />
        </LoaderWrapper>
      </Wrapper>
    )
  }

  const formattedDate = format(new Date(ticket.date), 'dd.MM.yyyy')

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <ExhibitionSlider images={ticket.exhibition.images} />
          <Container>
            <Title>{ticket.exhibition.name}</Title>
            <Address>{ticket.exhibition.address}</Address>
            <Price>
              {t('exhibitions.item.price', { value: ticket.exhibition.price })}
            </Price>
            <Separator />
            <DateAndTime>
              {t('tickets.item.date', {
                date: formattedDate,
                time: ticket.time,
              })}
            </DateAndTime>
            <Separator />
            <Title>{t('exhibitions.item.description')}</Title>
            <Description>{ticket.exhibition.description}</Description>
          </Container>
        </View>
      </ScrollView>
      <StyledButton
        style={{ paddingBottom }}
        title={t('tickets.item.delete')}
        onPress={open}
        loading={isRemoving}
        isDisabled={isRemoving}
      />
      <BottomAlert
        title={t('tickets.item.question')}
        visible={visible && !isRemoving}
        onClose={close}
        acceptColor={red_dark}
        acceptText={t('tickets.item.labelShort')}
        onAccept={deleteHandler}
      />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
  },
})
