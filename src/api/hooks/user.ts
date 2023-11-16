import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

import { type User } from 'src/types'

import { UserService } from '../services'

export const useGetMe = (queryOptions?: UseQueryOptions<User>) => {
  return useQuery({
    queryKey: ['users/me'],
    queryFn: () => UserService.getMe(),
    ...queryOptions,
  })
}
