import { useMutation, useQuery } from '@tanstack/react-query'

import { type CreateTicketPayload } from 'src/types'

import { TicketsService } from '../services'

export const useCreateTicketMutation = () => {
  return useMutation({
    mutationFn: (payload: CreateTicketPayload) =>
      TicketsService.create(payload),
  })
}

export const useGetAllTickets = () => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: () => TicketsService.getAll(),
  })
}

export const useGetOneTicket = (id: string) => {
  return useQuery({
    queryKey: ['tickets/', id],
    queryFn: () => TicketsService.getOne(id),
  })
}

export const useDeleteTicket = () =>
  useMutation({ mutationFn: (id: string) => TicketsService.delete(id) })
