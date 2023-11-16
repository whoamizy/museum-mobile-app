import { TicketsProvider } from 'src/context'

import { CreateTicketContent } from './content'

export const CreateTicketScreen = () => {
  return (
    <TicketsProvider selected={new Date().toISOString()}>
      <CreateTicketContent />
    </TicketsProvider>
  )
}
