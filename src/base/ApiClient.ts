import 'dotenv/config'
import { ApiClientBase } from './APIClientBase'

export class ApiClient extends ApiClientBase {
  private static classInstance?: ApiClient

  private constructor() {
    super()
  }

  public static getInstance(): ApiClient {
    if (this.classInstance == null) {
      this.classInstance = new ApiClient()
    }

    return this.classInstance
  }

  get baseUrl(): string {
    return process.env.BASEURL ?? ''
  }
}
