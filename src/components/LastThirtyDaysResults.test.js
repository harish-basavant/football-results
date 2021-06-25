import { render, screen } from '@testing-library/react';
import LastThirtyDaysResults from './LastThirtyDaysResults';

describe('LastThirtyDaysResults component', () => {
  test(' 1. Fail to render when no data is passed', async () => {
    render(<LastThirtyDaysResults />);
    const listItemElements = screen.queryByRole('listitem');
    expect(listItemElements).toBeNull();
  });
  test(' 2. Successfully render listitems when data is passed', async () => {
    render(<LastThirtyDaysResults results={matches} loading={false} />);
    const listItemElements = await screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(1);
  });
});

const matches = [
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
];
