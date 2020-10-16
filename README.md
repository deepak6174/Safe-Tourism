# Safe Tourism in Covi-19 (MERN Stack Engine)





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

