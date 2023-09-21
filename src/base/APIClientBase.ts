import axios, { type AxiosStatic } from 'axios'
import * as AxiosLogger from 'axios-logger'

export abstract class ApiClientBase {
  protected constructor () {
    axios.interceptors.response.use(async (response) => {
      const customResponse: unknown = {
        data: response.data,
        status: response.status,
        headers: response.headers
      }
      return customResponse
    })

    axios.interceptors.request.use(AxiosLogger.requestLogger)

    axios.defaults.headers.common = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    axios.defaults.validateStatus = () => true
  }

  client: AxiosStatic = axios
}
