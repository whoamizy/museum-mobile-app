import { useLayoutEffect } from 'react'
import { useTheme } from 'styled-components/native'

import { useGetAllTickets } from 'src/api'
import { Header, Loader, Wrapper } from 'src/components'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'

import { TicketsList } from './list'

const ScreenHeader = () => <Header title={t('tickets.title')} hideBack />

export const TicketsScreen = () => {
  const { red_dark } = useTheme()
  const { setOptions } = useNavigation()

  const { data: tickets, isLoading } = useGetAllTickets()

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  return (
    <Wrapper>
      {isLoading && <Loader color={red_dark} />}
      {!!tickets && <TicketsList tickets={tickets} />}
    </Wrapper>
  )
}
