import { Path } from 'src/enums'
import { type User } from 'src/types'

import { BaseService } from './base'

export class UserService extends BaseService {
  public static async getMe() {
    const { data } = await this.fetch<User>({
      url: Path.ME,
    })

    return data
  }
}
