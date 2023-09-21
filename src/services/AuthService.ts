import { type Response } from '../models/responses/Response'
import { type CredentialsModel } from '../models/request/CredentialsModel'
import { ServiceBase } from '../base/ServiceBase'

export class AuthService extends ServiceBase {
  constructor() {
    super('/auth')
  }

  async signIn<T>(credentials: CredentialsModel): Promise<Response<T>> {
    return await this.api.client.post(this.url, credentials)
  }
}
