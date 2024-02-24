# APIs-Timestamp-Microservice-Project
This repository contains my independent work for a timestamp microservice with JavaSceipt, created as part of the [first project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) in freeCodeCamp's [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) curriculum. This involves the development of a Node.js and Express.js web application. The primary goal of this is to provide timestamp-related functionalities and serve static files. The application features API endpoints for retrieving the current timestamp and handling user-entered date strings. The project includes key features such as a timestamp service offering Unix and UTC formats, user-entered date handling with validation, Cross-Origin Resource Sharing (CORS) middleware for secure cross-connection, and static file serving for the "public" directory, facilitating the serving of HTML, CSS, and client-side scripts.

## Installation

To get started, clone the repository with `git clone <repository-url>`, navigate to the project directory with `cd <project-directory>`, and install dependencies using `npm install`.

## Usage

Run the server with `npm start` and open the application in a web browser at `http://localhost:3000`.

## API Endpoints

The project defines two main API endpoints. The first, `/api`, responds to a GET request with the current timestamp in both Unix and UTC formats. The second, `/api/:date_string`, handles user-entered date strings, validating the format and responding with Unix and UTC timestamps accordingly. Error handling is implemented for invalid date strings.

## Examples

- To retrieve the current timestamp, visit `http://localhost:3000/api`.
- To handle a user-entered date (e.g., "2022-03-25"), visit `http://localhost:3000/api/2022-03-25`.

## Dependencies

The project relies on [express](https://www.npmjs.com/package/express) and [cors](https://www.npmjs.com/package/cors).
