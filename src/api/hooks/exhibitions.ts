import { useQuery } from '@tanstack/react-query'

import { ExhibitionService } from '../services'

export const useGetAllExhibitions = () => {
  return useQuery({
    queryKey: ['exhibitions'],
    queryFn: () => ExhibitionService.getAll(),
  })
}

export const useGetOneExhibition = (id: string) => {
  return useQuery({
    queryKey: ['exhibitions/id', { id }],
    queryFn: () => ExhibitionService.getOne(id),
  })
}
