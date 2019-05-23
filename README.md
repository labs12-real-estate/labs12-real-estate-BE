# labs12-real-estate-BE
# https://labs12-real-estate.herokuapp.com/
# https://trello.com/b/suh91Xsm/labs12-my-house

# API For MyHouse 

## Getting started

To get the server running locally:

- Clone this repo
- `yarn install` to install all required dependencies
- `yarn server` to start the local server
- `yarn test` to start server using testing environment

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

## User Endpoints

### POST /api/users/

- Returns an object with the new user's information.

- {"message": "Both email and password are required"} will be return if either email or password property is missing.

- Request Example:

```
{
    "email": "David.Lam@gmail.com",
    "password": "newpassword"
}
```

- Response Example:

```
{
    "userId": 151,
    "email": "David.Lam@yahoo.com",
    "password": "newpassword",
    "profile_image": null
}
```

### GET /api/users/:id

- Returns an object with the user's information.

- {"message": "Can not find a user with that ID."} will be return if the user id is not in the database.

- Response Example:

```
{
    "userId": 1,
    "email": "Jamir.Flatley41@gmail.com",
    "password": "HtYB1fVXr9zA9DE",
    "profile_image": "http://lorempixel.com/640/480"
}
```

### PUT /api/users/:id

- Returns an object with the user's updated information.

- If you are changing user's password, the currentPassword property is required. Otherwise, it can be omitted.
{"message": "You must provide your current password if you want to change it to something else."}

- Request Example:

```
{
    "email": "David.Lam@gmail.com",
    "password": "newpassword",
    "currentPassword": "HtYB1fVXr9zA9DE"
}
```

- Response Example:

```
{
    "userId": 1,
    "email": "David.Lam@gmail.com",
    "password": "newpassword",
    "profile_image": "http://lorempixel.com/640/480"
}
```

### DELETE /api/users/:id

- Returns a message saying deletion of account is successful.

- {"message": "No user found with that ID."} will be return if the user id is not in the database.

- Response Example:

```
{
    "message": "Account deleted."
}
```

## House Endpoints

### POST /api/houses/

- Returns an object with the new house's information.

- userId is required and must already exist in database.

- Request Example:

```
{
	"userId": "1",
    "description": "Ut unde numquam nisi minus.",
    "backdrop_image": "http://lorempixel.com/640/480",
    "recent_remodel": "Laborum aut est qui eligendi qui consequuntur dignissimos.",
    "parcel_data_address": "33946 Hoeger River"
}
```

- Response Example:

```
{
    "houseId": 154,
    "point_estimate_valuation": null,
    "valuation_low": null,
    "valuation_high": null,
    "description": "Ut unde numquam nisi minus.",
    "backdrop_image": "http://lorempixel.com/640/480",
    "photos_path": null,
    "recent_remodel": "Laborum aut est qui eligendi qui consequuntur dignissimos.",
    "upgrades": null,
    "userId": 1,
    ...
}
```

### GET /api/houses/:id

- Returns an object with the house's information.

- {"message": "Cannot find a house with that ID."} will be return if the houseId is not in the database.

- Response Example:

```
{
    "houseId": 154,
    "point_estimate_valuation": null,
    "valuation_low": null,
    "valuation_high": null,
    "description": "Ut unde numquam nisi minus.",
    "backdrop_image": "http://lorempixel.com/640/480",
    "photos_path": null,
    "recent_remodel": "Laborum aut est qui eligendi qui consequuntur dignissimos.",
    "upgrades": null,
    "userId": 1,
    ...
}
```

### GET /api/houses/ofuser/:id

- Returns an array of houses belong to a user.

- {"message": "Cannot find any house with that userId."} will be return if the userId is not in database or that user does not have any house saved.  

### POST /api/houses/getvalue

- Returns an initial value and infos for an address

- Request Example:

```
{
    "address": "4565 White Rd, Pierson, MI, USA"
}
```

- Response Example:

```
{
    "low": 5064997.445223227,
    "high": 6390140.1363238115,
    "parcel": {
        "latitude": "43.360028",
        "longitude": "-85.543544",
        "tax_year": "2018",
        "tax_value": "80600.0",
        "year_built": "1980",
        "property_size": "30492",
        "home_size": "924",
        "bathrooms": "1.0",
        "bedrooms": "3",
        "last_sold_date": null,
        "last_sold_price": null,
        "zestimate_amount": "88850",
        "zestimate_last_updated": "05/22/2019",
        "zestimate_value_change": "-206",
        "zestimate_valuation_range_high": "105732",
        "zestimate_valuationRange_low": "74634",
        "zestimate_percentile": "0"
    },
    "address": "4565 White Rd, Pierson, MI 49339"
}
```

### POST /api/houses/getprecisevalue

- Returns a more precise value of a house using user's input

- Request Example:

```
{
    "address": "4565 White Rd, Pierson, MI 49339",
    "countertops": "Marble/Quartz",
	"flooring": "Hardwood",
	"roofAge": "15+",
	"furnaceAge": "15+"
}
```

- Response Example:

```
{
    "value": 5931637.949887535,
    "low": 5269066.604337242,
    "high": 6594209.295437827
}
```