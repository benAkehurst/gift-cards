# Gift Cards

## What is this project

This is a full stack app built with MongoDB, Node.js and Express and React on the frontend.

The idea for the app came from understanding that I have to many free gift and loyalty stamp cards in my wallet and wanted to make an app to digitise how a cafe or resturant would handle loyalty cards.

I also wanted to take this opertunity to learn the React library.

I also learned how to use Sketch to design how the app should look.

## User Stories

As a user:

1. I should be able to signup for an account, and then login to the app
2. On the homepage, I should see a card with the amount of stamps I have already. If I have 10 stamps, I should see this.
3. I should be able to see my account, which has a history of when I got a stamp, and how many cards I have completed.

As an Admin:

1. I should login, and go to the admin page.
2. I should be able to enter the customers ID and a number of stamps to add to their account

## Designs

Client Screen 1
![Client Screen 1](https://i.imgur.com/90ai0XH.png)

Client Screen 2
![Client Screen 2](https://i.imgur.com/gIUEz2t.png)

Admin Screen
![Admin Screen](https://i.imgur.com/Apm6N0y.png)

## Video Walkthough

Click on the image below to watch a video walkthough of the app!
[![Everything Is AWESOME](http://i.imgur.com/Ot5DWAW.png)](https://youtu.be/StTqXEQ2l-Y?t=35s 'Everything Is AWESOME')

## Running the Project

### Prerequisites

- [Nodejs](https://nodejs.org/en/) - v10+
- [Mongodb](https://www.mongodb.com/) - v3 or v4

Nice to have:

- [Postman](https://www.getpostman.com/)
- [A GUI mongodb client](https://robomongo.org/download)

### Installation

Clone the repo to your local machine with the command:

```
git clone https://github.com/benAkehurst/gift-cards.git
```

## Server

### [Server Documentation](https://github.com/benAkehurst/gift-cards/blob/master/server/README.md)

1. Run the `npm i` command in the root server file to install the node_modules.

2. In a seperate terminal window run `mongod` to run Mongodb locally.

3. In the server terminal window, run `npm run start`. This will run nodemon and keep the server running, and restart it when making a changes.

4. Now consult the readme for the server for the routes and use postman to check the server is running and responding to requests.

## Client

### [Client Documentation](https://github.com/benAkehurst/gift-cards/blob/master/client/gift-card/README.md)

1. Enter the client folder, and then `gift-card` subfolder.

2. Run `npm i` to install the node_modules.

3. Run `npm start` to serve the react client.

### FAQ's

- If you have question or suggestion, please open an issue or a PR.
