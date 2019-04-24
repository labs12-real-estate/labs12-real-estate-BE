# labs12-real-estate-BE
# https://trello.com/b/suh91Xsm/labs12-my-house

# API For MyHouse 

## Getting started

To get the server running locally:

- Clone this repo
- `yarn install` to install all required dependencies
- `yarn server` to start the local server

# Dependencies

### [Express](https://www.npmjs.com/package/express)

Express is our Web Framework of choice for creating our RESTful API.

### [Helmet](https://www.npmjs.com/package/helmet)

Helmet is a middleware function we use for Express. It sets multiple headers, to make our API more secure.

### [Morgan](https://www.npmjs.com/package/morgan)

Morgan is an Express middleware function used to log every HTTP request in the console of the application. This is very useful for seeing the result of all requests going through your API.

### [Cors](https://www.npmjs.com/package/cors)

Cors is used to enabling Cross origin resource sharing between the API and Front End. This package allows us to do it with one simple line, and acts as a middle ware function for Express.

### [Dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is simple, yet important. It loads variables from a .env file into process.env for our project to take use of.

### [Knex](https://www.npmjs.com/package/knex)

Knex is an SQL query builder that we use to interact with our Database in the API.

### [PG](https://www.npmjs.com/package/pg)

Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.

## Development Dependencies

### [Cross-env](https://www.npmjs.com/package/cross-env)

Cross-env is used for allowing Environment Variable setting with any platform/operating system.

### [Faker](https://www.npmjs.com/package/faker)

Faker is used for generating random data.

### [Jest](https://www.npmjs.com/package/jest)

Jest is meant for Javascript testing.

### [Supertest](https://www.npmjs.com/package/supertest)

Supertest is used for HTTP Assertions. We use Supertest to test all of our API Endpoints.

### [Nodemon](https://www.npmjs.com/package/nodemon)

Nodemon is used for restarting your Node.js Application automatically if any of the source code changes.

# Environment Variables

- `DATABASE_URL` PostgreSQL connection string. Provided by Heroku if you have a PostgreSQL addon.
- `DB_ENV` Can be set to `testing`, `development`, or `production`. Defaults to `development`.

# Endpoints

### GET

- 

- Response Example:

```
{
}
```

