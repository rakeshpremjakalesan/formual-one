import { useQuery } from 'react-query'
import axios from 'axios'

const fetchWinnerList = () => {
  return axios.get(
    `${process.env.name}/driverStandings/1.json?limit=40&offset=55`
  )
}
export const useWinnerData = (onSuccess: any, onError: any) => {
  return useQuery('winner-list', fetchWinnerList, {
    onSuccess: onSuccess,
    onError: onError,
  })
}
