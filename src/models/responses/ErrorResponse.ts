export interface ErrorResponse {
  status: number
  message?: string
  errors: Array<{
    message: string
    errorType: string
  }>
}
