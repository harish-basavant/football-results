export const url = 'https://api.football-data.org/v2/matches'

const urlHeaders = new Headers()
urlHeaders.append('X-Auth-Token', 'c0e0b002509c452b8318c0bfd7503245')

export const requestOptions = {
  method: 'GET',
  headers: urlHeaders,
  redirect: 'follow',
}
