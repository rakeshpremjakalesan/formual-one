import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSeasonDetails = ({ queryKey }: any) => {
  const season = queryKey[1]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return axios.get(`${process.env.name}/${season}/results/1.json`)
}
export const useSeasonData = (season: any, onSuccess: any, onError: any) => {
  return useQuery(['season-list', season], fetchSeasonDetails, {
    onSuccess: onSuccess,
    onError: onError,
  })
}
