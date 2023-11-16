import { useQuery } from '@tanstack/react-query'

import { NewsService } from '../services'

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => NewsService.getAll(),
  })
}
