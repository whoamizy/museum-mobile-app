import { TicketsProvider } from 'src/context'

import { CreateTicketContent } from './content'

export const CreateTicketScreen = () => {
  const today = new Date()
  today.setDate(today.getDate() + 1)

  return (
    <TicketsProvider selected={today.toISOString()}>
      <CreateTicketContent />
    </TicketsProvider>
  )
}
