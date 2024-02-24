# APIs-Timestamp-Microservice-Project
UPDATE THIS README. This repository contains my independent work for a machine learning model for SMS spam detection with Python, as part of the [final project](https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/neural-network-sms-text-classifier) in freeCodeCamp's [Machine Learning with Python](https://www.freecodecamp.org/learn/machine-learning-with-python/#machine-learning-with-python-projects) curriculum. The aim of this model is to classify text messages as "ham" (non-spam) or "spam", by using Natural Language Processing (NLP) techniques and machine learning algorithms. The dataset used contains labeled SMS messages, and the preprocessing steps involve converting the text data into a bag-of-words representation, followed by a TF-IDF transformation to quantify the importance of words. The project explores different algorithms, including a Random Forest classifier, an XGBoost regressor, and a Support Vector Machine (SVM) classifier using GridSearchCV for hyperparameter tuning. The final model, based on SVM, demonstrates high accuracy in predicting spam messages. The evaluation metrics, including the confusion matrix, classification report, and accuracy score, illustrate the model's performance on test data. The project presents this model in a prediction function and performs tests on this, for practical validation of the model's effectiveness in identifying SMS spam. The solution this project presents highlights the application of machine learning in addressing real-world challenges with Python, such as spam detection in SMS messages.

# Project Title

This project, part of freeCodeCamp's APIs curriculum, involves the development of a Node.js and Express.js web application. The primary goal is to provide timestamp-related functionalities and serve static files. The application features API endpoints for retrieving the current timestamp and handling user-entered date strings. The project includes key features such as a timestamp service offering Unix and UTC formats, user-entered date handling with validation, Cross-Origin Resource Sharing (CORS) middleware for secure cross-connection, and static file serving for the "public" directory, facilitating the serving of HTML, CSS, and client-side scripts.

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

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

