import { Path } from 'src/enums'
import { type Collection } from 'src/types'

import { BaseService } from './base'

export class CollectionService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<Collection[]>({
      url: Path.COLLECTIONS,
    })

    return data
  }
}
