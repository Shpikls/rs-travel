import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCms = () => {
  return useQuery(['cms'], async () => {
    const url = `http://${window.location.hostname}:8000/cms`
    const { data } = await axios.get(url)

    return data
  })
}
