import { render, screen } from '@testing-library/react'
import FootBallResults from './FootBallResults'

describe('FootBallResults component', () => {
  test('renders results if request succeeds', async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
        count: 61,
        filters: {
          dateFrom: '2021-06-12',
          dateTo: '2021-06-22',
          permission: 'TIER_ONE',
        },
        matches: [
          {
            id: 325100,
            competition: {
              id: 2152,
              name: 'Copa Libertadores',
              area: {
                name: 'South America',
                code: 'SAM',
                ensignUrl: null,
              },
            },
            season: {
              id: 727,
              startDate: '2021-02-24',
              endDate: '2021-11-20',
              currentMatchday: 6,
              winner: null,
            },
            utcDate: '2021-05-27T00:00:00Z',
            status: 'FINISHED',
            matchday: 6,
            stage: 'GROUP_STAGE',
            group: null,
            lastUpdated: '2021-05-31T16:20:53Z',
            odds: {
              msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
            },
            score: {
              winner: 'HOME_TEAM',
              duration: 'REGULAR',
              fullTime: {
                homeTeam: 3,
                awayTeam: 0,
              },
              halfTime: {
                homeTeam: 2,
                awayTeam: 0,
              },
              extraTime: {
                homeTeam: null,
                awayTeam: null,
              },
              penalties: {
                homeTeam: null,
                awayTeam: null,
              },
            },
            homeTeam: {
              id: 2061,
              name: 'CA Boca Juniors',
            },
            awayTeam: {
              id: 4267,
              name: 'Club The Strongest',
            },
            referees: [],
          },
        ],
      }),
    })
    render(<FootBallResults />)
    const listItemElements = await screen.findAllByRole(
      'listitem',
      {},
      { timeout: 10000 },
    )
    expect(listItemElements).not.toHaveLength(0)
  })
})
