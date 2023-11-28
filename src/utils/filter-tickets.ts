import format from 'date-fns/format'
import isAfter from 'date-fns/isAfter'
import isSameDay from 'date-fns/isSameDay'

import { type Ticket } from 'src/types'

export const filterTickets = (tickets: Ticket[]) => {
  const now = new Date()
  const formattedToday = format(now, 'yyyy-MM-dd')

  return tickets.filter((t) => {
    const ticketDate = new Date(t.date)

    return (
      isSameDay(ticketDate, new Date(formattedToday)) ||
      isAfter(ticketDate, new Date(formattedToday))
    )
  })
}
