import { Path } from 'src/enums'
import {
  type AuthToken,
  type LoginPayload,
  type RegisterPayload,
} from 'src/types'

import { BaseService } from './base'

export class AuthService extends BaseService {
  public static async login(payload: LoginPayload) {
    const { data } = await this.fetch<AuthToken>({
      url: Path.LOGIN,
      data: payload,
      method: 'POST',
    })

    return data
  }

  public static async register(payload: RegisterPayload) {
    const { data } = await this.fetch<AuthToken>({
      url: Path.REGISTER,
      data: payload,
      method: 'POST',
    })

    return data
  }
}
