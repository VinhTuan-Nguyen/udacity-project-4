export const apiEndpoint = process.env.REACT_APP_API_ENDPOINT
export const authConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  callbackUrl: 'http://localhost:3000/callback'
}
