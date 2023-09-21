import { type SessionResponse } from '../../../models/responses/SessionResponse'
import { AuthService } from '../../../services/AuthService'

describe('Sign In', () => {
  const authService = new AuthService()

  it('@Smoke - Sign In - with valid credentials', async () => {
    const response = await authService.signIn<SessionResponse>({
      username: 'admin',
      password: 'password123'
    })
    expect(response.status).toEqual(200)
  })

  it('@Regression - Sign In - with a wrong username', async () => {
    const response = await authService.signIn<any>({
      username: 'wrong_username',
      password: 'password123'
    })
    expect(response.status).toEqual(200)
    expect(response.data.reason).toEqual('Bad credentials')
  })
})
