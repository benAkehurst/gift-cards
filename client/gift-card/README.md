# Client Documentation

The client for this project was created in React, firstly as a tool to learn how the react library works and to practice the implementation of using React. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the app

1. Make sure the server and database are running in seperate terminal windows.
2. Navigate to the `gift-card` folder.
3. Run `npm start`, and React will start the client.

## Architecture

The app is made up of `Containers` which are built with the single `Components`.

There are 4 different routes in the app:

1. Auth - A dynamic Register/Login screen. Is the default route in the app.
2. Home - As a user, this is the screen you see when logged in. It holds your card and id.
3. Account - As a user, this is where you can see your past transactions
4. Admin - As an admin, you can use this page to add stamps to a user.

##  Storybook

This project also utalises Storybook to document all the atom components that are being used in the app. This way you can see what each component does indipendently of the container that uses it.

To run storybook, simply run `npm run storybook` from the `gift-card` file.
