/*
This file contains the list of all the endpoints in the application.


| **Model**    | **Route Path**           | **HTTP Method** | **Description**                |
|--------------|--------------------------|-----------------|--------------------------------|
| Teams        | `/api/nfl/teams`         | GET             | Get all teams                  |
| Teams        | `/api/nfl/teams`         | POST            | Create a new team              |
| Teams        | `/api/nfl/teams/:id`     | GET             | Get a team by ID               |
| Teams        | `/api/nfl/teams/:id`     | PUT             | Update a team by ID            |
| Teams        | `/api/nfl/teams/:id`     | DELETE          | Delete a team by ID            |
| Players      | `/api/nfl/players`       | GET             | Get all players                |
| Players      | `/api/nfl/players`       | POST            | Create a new player            |
| Players      | `/api/nfl/players/:id`   | GET             | Get a player by ID             |
| Players      | `/api/nfl/players/:id`   | PUT             | Update a player by ID          |
| Players      | `/api/nfl/players/:id`   | DELETE          | Delete a player by ID          |
| Games        | `/api/nfl/games`         | GET             | Get all games                  |
| Games        | `/api/nfl/games`         | POST            | Create a new game              |
| Games        | `/api/nfl/games/:id`     | GET             | Get a game by ID               |
| Games        | `/api/nfl/games/:id`     | PUT             | Update a game by ID            |
| Games        | `/api/nfl/games/:id`     | DELETE          | Delete a game by ID            |

*/

/*
HOW TO MAKE A POST REQUEST TO CREATE A NEW TEAM
1. Open Postman
2. Select the POST method
3. Enter the URL: http://localhost:2000/api/nfl/teams
4. Select the Body tab
5. Select the raw option
6. Select JSON (application/json) from the dropdown
7. Enter the team data in JSON format everything must be in double quotes the keys and values
8. Click the Send button
*/