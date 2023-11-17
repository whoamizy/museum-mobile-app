import { useQuery } from '@tanstack/react-query'

import { CollectionService } from '../services'

export const useGetAllCollection = () => {
  return useQuery({
    queryKey: ['collection'],
    queryFn: () => CollectionService.getAll(),
  })
}
