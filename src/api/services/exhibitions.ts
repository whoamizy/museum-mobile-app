import { Path } from 'src/enums'
import { type Exhibition } from 'src/types'

import { BaseService } from './base'

export class ExhibitionService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<Exhibition[]>({
      url: Path.EXHIBITIONS,
    })

    return data
  }

  public static async getOne(id: string) {
    const { data } = await this.fetch<Exhibition>({
      url: `${Path.EXHIBITIONS}/${id}`,
    })

    return data
  }
}
