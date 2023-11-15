import { useMutation } from '@tanstack/react-query'

import { type LoginPayload } from 'src/types'

import { AuthService } from '../services'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthService.login(payload),
  })
}
