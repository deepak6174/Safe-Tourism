# Safe Tourism in Covid-19 
To make tourism safe we have to allow only minimum number of person at a time to visit a particular tourist place to avoid congestion and to maintain a safe distance from other people around. We will decide the number of person visiting at a time for all the tourist place of a particular city(city is Jaipur in our project). Tourist should check if that particular place is available on that day and time. If available he can book the place otherwise check for different time, date or location. At the arrival only registered persons will be allowed to enter. We can also add rating feature so the person can rate the place on the basis of precautions taken by the working staff for covid-19. We would like to extend this project by enhancing it with some more features like rating, review system


## Installation

- `git clone <this_url> && cd <repo_name>`
- install npm on client and server
  - `cd client`
  - `npm install`
  - `cd ../api`
  - `npm install`
- Import Default data into MongoDB server from `db` folder
  - `cd db`
  - `mongorestore -h <server>:<port> -d <dbname> -u <user> -p <password> ./`
- Configure Server
  - Update `keys.js` file in `mongoURI` section as your `MongoDB credential`
- Running the application in development mode
  - Development Mode (Client only): `cd client` then `yarn start` then open `http://localhost:3000` in a browser
  - Development Mode (Server only): `cd api` then `yarn dev` then open `http://localhost:3005` in a browser

