import { Path } from 'src/enums'
import { type NewsItem } from 'src/types'

import { BaseService } from './base'

export class NewsService extends BaseService {
  public static async getAll() {
    const { data } = await this.fetch<NewsItem[]>({
      url: Path.NEWS,
    })

    return data
  }
}
