import { useQuery } from '@tanstack/react-query'

import { type GetFreeTimesParams } from 'src/types'

import { FreeTimesService } from '../services'

export const useGetFreeTimes = (params: GetFreeTimesParams) => {
  return useQuery({
    queryKey: [
      'free-times',
      { date: params.date, exhibition: params.exhibition },
    ],
    queryFn: () => FreeTimesService.getAll(params),
    staleTime: 0,
  })
}
