# Gift Card Node.js API server

I adapted this server from my [Boilerplate api project](https://github.com/benAkehurst/nodejs-api-server).

## Start the server with nodemon: `nodemon start server.js`

## User Endpoints

### Gets all the users in the DB

```javascript
GET - http://localhost:3000/api/users
```

### Create a new user

```javascript
POST - http://localhost:3000/api/user/create
Body:
{
  "name": "Users name",
  "email": "Users email",
  "password": "Users password"
}
```

### Login a user

```javascript
POST - http://localhost:3000/api/user/login
Body:
  {
    "email": "Users email",
    "password": "Users password"
  }
```

## Stamp Endpoints

### Adds a stamp to a user

```javascript
POST - http://localhost:3000/api/stamps/add-stamp
Body:
{
  "_id": "admins user id from mongo db",
  "customerId": "Users id that is generated upon signup (NOT MongoDB ID)",
  "stampsToAdd": "This needs to be a number"
}
```
