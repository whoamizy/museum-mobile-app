import { useMutation } from '@tanstack/react-query'

import { type LoginPayload, type RegisterPayload } from 'src/types'

import { AuthService } from '../services'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthService.login(payload),
  })
}

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthService.register(payload),
  })
}
