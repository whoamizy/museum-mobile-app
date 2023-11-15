import { type ROLE } from 'src/enums'

export interface User {
  _id: string
  username: string
  email: string
  password: string
  role: ROLE
}
