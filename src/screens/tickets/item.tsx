import React from 'react'
import { View } from 'react-native'
import Config from 'react-native-config'
import format from 'date-fns/format'

import { Path } from 'src/enums'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type Ticket } from 'src/types'

import {
  Address,
  DateAndTime,
  ExhibitionInfo,
  Info,
  Price,
  StyledImage,
  TicketCard,
  Title,
} from './styles'

interface Props {
  ticket: Ticket
}

export const TicketsItem = ({ ticket }: Props) => {
  const { navigate } = useNavigation()

  const imageUrl = `${Config.BASE_URL}${Path.GET_IMAGE}${ticket.exhibition.images[0]}`

  const formattedDate = format(new Date(ticket.date), 'dd.MM')

  const navigateToDetails = () => {
    navigate(ROUTES.TICKET, { id: ticket._id })
  }

  return (
    <TicketCard onPress={navigateToDetails}>
      <StyledImage source={{ uri: imageUrl }} />
      <Info>
        <ExhibitionInfo>
          <Title numberOfLines={1}>{ticket.exhibition.name}</Title>
          <Address numberOfLines={1}>{ticket.exhibition.address}</Address>
          <Price numberOfLines={1}>
            {t('exhibitions.item.price', { value: ticket.exhibition.price })}
          </Price>
        </ExhibitionInfo>
        <View>
          <DateAndTime>{formattedDate}</DateAndTime>
          <DateAndTime>{ticket.time}</DateAndTime>
        </View>
      </Info>
    </TicketCard>
  )
}
