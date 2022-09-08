## Application Information
1. General Information  
    The Application has 2 page - Home page and List Page
        a.  Home Page   - Contains a tabular view Formula one winners from 2005 to 2021
        b.  List Page   - Once a row in the Home Page is clicked, application is navigated to List page which shows a tabular view of circuits and winners in a season with season winner highlighted.
2.  Technology Information
    a.  Application is not created using npx create-react-app
    b.  The application is developed using React, Typescript,Redux and React Query
    c.  Use Webpack as Module Bundler and Babel as transcompiler 
    d.  Testing - Using Jest and React Testing Library

##  Application Design
1.  For State management use React-Redux
2.  Since the API calls are returning same value every time, for efficiency React Query is used. So caching is handled effectively

## Install dependencies
npm install

## Linting
Using Husky to prevent code commits on Linting/Format errors 
So install es-lint,prettier as extension from Visual Studio

## Run dev server
npm start

## Build
npm run build

## Test
npm test

## Coverage
npm test -- --coverage
Due to time constraints was not able to achieve good test coverage
