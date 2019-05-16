# recipe-service

## Introduction

This Recipe Service API is an microservice for a larger application called Quantified Self. This service provides endpoints that can find recipes by food type, sort recipes by prep time and calorie count, and find the average calorie count of a single food type.

## Initial Setup

In order to run the application in development mode and run the test suite, clone down this repo.

Run:

```
npm install
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```
This will install dependencies, create your development database, migrate the database, and seed the database with 30 recipes.

In order to run the local server,

Run:

```
npm start
```

And use the url: 

```
http://localhost:3000/
```

## How to Use

In order to use the recipe service API, you need to use the url: 
```
https://enigmatic-shelf-94907.herokuapp.com/
```
### Finding recipes for a specific food type

In order to return an array of recipe objects for a certain food type, make a GET request to:
```
/api/v1/recipes/food_search?q=<YOUR_FOOD_TYPE>
```
This will return recipe objects according to Fast JSON conventions.

### Finding recipes by the least amount of prep time

In order to return an array of recipe objects sorted by prep time from least to greatest, make a GET request to:
```
/api/v1/recipes/prep_time
```
This will return recipe objects according to Fast JSON conventions.

### Finding recipes by the least amount of ingredient

In order to return an array of recipe objects sorted by ingredients from least to greatest, make a GET request to:
```
/api/v1/recipes/ingredient_count
```
This will return recipe objects according to Fast JSON conventions.

### Finding an average calorie count for a specific food type

In order to return an average calories for a food type, make a GET request to:
```
/api/v1/recipes/average_calorie_count?q=<YOUR_FOOD_TYPE>
```
## Running Tests

The service is tested using Jest. In order to run the test suite,

Run:

```
npm test
```

It will automatically run all of the tests, and then the test will continue to run in the background until you quit with 'q'.

## Core Contributors

The code was written entirely by Teresa Knowles and Tim Allen.

## Schema Design

The database for this microservice only contains one table for 'recipes'

Each row has an id, name, url, foodType, calorieCount, prepTime, and ingredientCount.

## Tech Stack List

node.js
Express
Jest
Postgres
Sequelize
