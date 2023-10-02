import type { AxiosRequestConfig } from 'axios'
import { ApiClient } from './ApiClient'
import { type Response } from '../models/responses/Response'
import { type SessionResponse } from '../models/responses/SessionResponse'

export class ServiceBase {
  protected api: ApiClient
  protected url: string
  protected defaultConfig: AxiosRequestConfig

  constructor (endpointPath: string) {
    this.api = ApiClient.getInstance()
    this.url = this.api.baseUrl + endpointPath
  }

  async Authenticate (): Promise<void> {
    const response: Response<SessionResponse> = await this.api.client.post(
      this.api.baseUrl + '/auth',
      {
        username: process.env.LOGIN_USERNAME,
        password: process.env.LOGIN_PASSWORD
      }
    )
    this.defaultConfig = {
      headers: { Cookie: 'token=' + response.data.token }
    }
  }
}
