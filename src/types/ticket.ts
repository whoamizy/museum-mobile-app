import { type Exhibition } from './exhibitions'
import { type User } from './user'

export interface Ticket {
  _id: string
  user: User
  date: string
  time: string
  exhibition: Exhibition
}

export interface CreateTicketPayload {
  user?: string
  date: string
  time: string
  exhibition: string
}
