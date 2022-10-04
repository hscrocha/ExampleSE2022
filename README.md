# ExampleSE2022

Example Repository for Software Engineering course (F2022) at Loyola University Maryland.

This repo has some User Stories (issues) on the board, and it is also used for the React Native Basic, and Testing lectures.

## Warning

The app in this repo is not complete. Neither it is following good design decisions for a real-world mobile project. The purpose is to showcase some important concepts (e.g., testing), and simpler design (e.g., local database). 

Moreover, I tested the above project on MacOS deploying in a IOS simulator. Please adapt when necessary for Android and other OS. 

## Getting Started (Setup your Environment)

Check out the [Environment Setup](https://reactnative.dev/docs/environment-setup) in the React Native Docs. I recommend following that before anything else, so that you are certain that your environment is properly configured to run React Native apps.

## After Downloading the Repo

Clone the repo, first you need to install the dependent packages with the command:
```
npm install
````

For MacOS, you need to also do 
```
npx pod-install
```

You will also need to "register" this app once by using the command: 
```
npm start
```

## How to Run

After all the above steps, you can use ```npm run ios``` or ```npm run android```

## Testing

The framework [Jest](https://jestjs.io/) is already configured when creating any Reactive Native app. To run the tests use the command ```npm test```.

To display the coverage report use the command ```npm test -- --coverage```. The extra dashes and space before --coverage is not a typo.
