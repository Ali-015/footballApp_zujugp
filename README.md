# Express.js + TypeScript + Docker example

This example demonstrates how to build an Express.js application using TypeScript, and how to wrap the app into Docker container.

## Application dependencies

- [Express.js](https://expressjs.com)
- [TypeScript](https://www.typescriptlang.org)

## Environment dependencies

- [Node.js](nodejs.org)
- [Docker](https://store.docker.com/search?offering=community&type=edition) (optional)

## Running the app

Clone the repo
Run npm install
Run 'npm run start:dev' to start the dev server
Navigate to localhost:3000
Enter username and password both as 'admin' to login into the application
Play with the app
This app is already committed with the sqlite db,however if you want to change data 
and run migrations use the following commands 'npm run dbmigrations'
## Usage

- `npm install && npm run build`: build the project
- `npm run start:dev`: start development server watching changes in ./src
- `npm start`: start production server running the compiled app in ./lib
- `npm run build:docker`: build Docker container image
- `npm run start:docker`: launch Docker container using the image