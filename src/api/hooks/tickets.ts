import { useMutation } from '@tanstack/react-query'

import { type CreateTicketPayload } from 'src/types'

import { TicketsService } from '../services'

export const useCreateTicketMutation = () => {
  return useMutation({
    mutationFn: (payload: CreateTicketPayload) =>
      TicketsService.create(payload),
  })
}
