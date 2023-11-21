import { useCallback, useLayoutEffect, useState } from 'react'
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Toast from 'react-native-toast-message'
import { useRoute } from '@react-navigation/native'
import { type NativeStackHeaderProps } from '@react-navigation/native-stack'
import format from 'date-fns/format'
import { useTheme } from 'styled-components/native'

import { useDeleteTicket, useGetOneTicket } from 'src/api'
import {
  BottomAlert,
  Container,
  ExhibitionSlider,
  Header,
  Loader,
  Separator,
  Wrapper,
} from 'src/components'
import { usePaddingBottom, useToggle } from 'src/hooks'
import { t } from 'src/i18n'
import { QrCodeIcon } from 'src/icons'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type TicketProp } from 'src/navigation/types'
import { queryClient } from 'src/utils'

import { QrCodeModal } from './qr-code-modal'
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
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const ScreenHeader = useCallback(
    ({ navigation }: NativeStackHeaderProps) => (
      <Header
        onBack={navigation.goBack}
        title={t('tickets.item.title')}
        EndComponent={
          <TouchableOpacity onPress={openModal}>
            <QrCodeIcon />
          </TouchableOpacity>
        }
      />
    ),
    [],
  )

  const paddingBottom = usePaddingBottom({ extraOffset: 8 })
  const { red_dark } = useTheme()
  const [refreshing, setRefreshing] = useState(false)
  const { replace, setOptions } = useNavigation()
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

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [ScreenHeader, setOptions])

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
      <QrCodeModal
        isVisible={modalVisible}
        close={closeModal}
        ticket={ticket}
      />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
  },
})
