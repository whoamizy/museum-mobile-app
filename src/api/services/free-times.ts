import { Path } from 'src/enums'
import { type GetFreeTimesParams } from 'src/types'

import { BaseService } from './base'

export class FreeTimesService extends BaseService {
  public static async getAll(params: GetFreeTimesParams) {
    const { data } = await this.fetch<string[]>({
      url: Path.FREE_TIMES,
      params,
    })

    return data
  }
}
