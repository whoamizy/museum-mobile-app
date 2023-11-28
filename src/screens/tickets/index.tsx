import { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'

import { useGetAllTickets } from 'src/api'
import { Header, Loader, Wrapper } from 'src/components'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { filterTickets } from 'src/utils'

import { TicketsList } from './list'
import { LoaderWrapper } from './styles'

const ScreenHeader = () => <Header title={t('tickets.title')} hideBack />

export const TicketsScreen = () => {
  const { red_dark } = useTheme()
  const { setOptions } = useNavigation()

  const { data: tickets, isLoading } = useGetAllTickets()
  const [filteredTickets, setFilteredTickets] = useState(tickets)

  useLayoutEffect(() => {
    setOptions({
      header: ScreenHeader,
    })
  }, [setOptions])

  useEffect(() => {
    if (tickets) {
      setFilteredTickets(filterTickets(tickets))
    }
  }, [tickets])

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader color={red_dark} />
        </LoaderWrapper>
      )}
      {!!filteredTickets && <TicketsList tickets={filteredTickets} />}
    </Wrapper>
  )
}
