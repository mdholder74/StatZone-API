// Seed data for teams
const defaultTeams = [
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
    franchisePlayers: [
        { name: 'Justin Jefferson', position: 'Wide Receiver', jerseyNumber: 18 },
        { name: 'Sam Darnold', position: 'Quarterback', jerseyNumber: 14 },
      ],
  },
];

// Seed data for players
const defaultPlayers = [
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
const defaultGames = [
  {
    homeTeam: 'Minnesota Vikings',
    awayTeam: 'Green Bay Packers',
    date: new Date(),
    score: {
      homeTeamScore: 27,
      awayTeamScore: 25,
    },
    location: 'Bank Stadium, Minneapolis ',
  },
];


module.exports = {defaultGames, defaultPlayers, defaultTeams};//This exports the defaultTeams, defaultPlayers, and defaultGames arrays so they can be used in other files. The seed data is used to populate the database with initial data when the application starts.