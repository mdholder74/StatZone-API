// Seed data for teams
const teams = [
  {
    teamName: 'Minnesota Vikings',
    city: 'Minneapolis',
    foundedYear: 1961,
    superbowlWins: 0,
  },
  {
    teamName: 'Green Bay Packers',
    city: 'Green Bay',
    foundedYear: 1919,
    superbowlWins: 4,
  },
];

// Seed data for players
const players = [
  {
    name: 'Justin Jefferson',
    position: 'Wide Receiver',
    stats: {
      gamesPlayed: 76,
      touchdowns: 40,
      receivingYards: 7432,
      passingYards: 0,
    },
  },
  {
    name: 'Sam Darnold',
    position: 'Quarterback',
    stats: {
      gamesPlayed: 83,
      touchdowns: 98,
      receivingYards: 0,
      passingYards: 16383,
    },
  },
];

// Seed data for games
const games = [
  {
    homeTeam: 'Minnesota Vikings',
    awayTeam: 'Green Bay Packers',
    date: new Date(),
    score: {
      homeTeamScore: 27,
      awayTeamScore: 25,
    },
    location: 'U.S. Bank Stadium, Minneapolis',
  },
];


