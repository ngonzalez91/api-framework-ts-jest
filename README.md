# API Test Automation Framework

## Getting started

Requirements:

- NodeJs 18.17.1
- Npm 10.0.0 (npm install -g npm@10.0.0)

The project uses the following stack:

- Node
- Typescript
- Jest
- Axios

This project uses the restful-booker public API (https://restful-booker.herokuapp.com/apidoc/) as the system under test.

## Understanding the structure

- **Base**: Base clases that implements the basics for API testing and handle the http conections thru axios.
- **Models**: Here goes the request and response entities for the use cases
- **Utils**: Utility libraries
- **Services**: Encapsulate the services representations (you will use this from your test cases). Similar to what
- you would do with a Page Object model but instead of a page it encapsulates a set of actions/endpoints.
- **tests**: The actual test cases

## To execute the suites

To run a rapid smoke test

    npm run test:smoke

To run a full regression suite

    npm test

The code checks linting (ESLint) and a prettier check with the execution of the tests.
You could ask Prettier to fix the problems by running

    npm run prettier:fix
