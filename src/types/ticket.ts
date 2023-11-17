import { type Exhibition } from './exhibitions'
import { type User } from './user'

export interface Ticket {
  _id: string
  user: User | string
  date: string
  time: string
  exhibition: Exhibition | string
}

export interface CreateTicketPayload {
  user?: string
  date: string
  time: string
  exhibition: string
}
