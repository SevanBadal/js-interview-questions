# JS Interview Questions

## Description
This repository is a collection of JavaScript interview questions, each represented as a separate directory. Within each directory, there are two files: one containing the question (a function or algorithm to implement) and another containing Jest tests for that question. The main branch contains starter files with completed tests. Contributors should implement their solutions on separate branches.

Questions are taken from [JavaScript Interview Prep: Practice Problems](https://www.udemy.com/course/javascript-interview-prep/)

## Project Structure
- Each interview question is in its own directory (e.g., `triple-add`).
- Within each directory:
  - `<question-name>.js`: A file containing the function or problem to be implemented.
  - `<question-name>.test.js`: Jest tests for the implementation.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) must be installed on your system.

### Installation
- Clone the repository:
  ```bash
  git clone [URL to your repository]
- Navigate to the repository directory:
  ```
  cd js-interview-questions
  ```
- Install dependencies:
  ```
  npm install
  ```

### Working on a Question
- Check out a new branch for the question you are working on, following the naming convention `<your-name>/<question-name>`:
  ```
  git checkout -b john-doe/triple-add
  ```
- Implement your solution in the question.js file within the relevant directory.
- Ensure your code passes all tests by running:
  ```
  npm test
  ```