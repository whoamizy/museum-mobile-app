import { Path } from 'src/enums'
import { type CreateTicketPayload, type Ticket } from 'src/types'

import { BaseService } from './base'

export class TicketsService extends BaseService {
  public static async create(payload: CreateTicketPayload) {
    const { data } = await this.fetch<Ticket>({
      url: Path.TICKETS,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async getAll() {
    const { data } = await this.fetch<Ticket[]>({
      url: Path.MY_TICKETS,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<Ticket>({
      url: `${Path.TICKETS}/${id}`,
    })

    return data
  }

  public static async delete(id: string) {
    const { data } = await this.fetch<Ticket>({
      url: `${Path.TICKETS}/${id}`,
      method: 'DELETE',
    })

    return data
  }
}
