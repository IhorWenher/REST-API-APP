Routes description

https://node-rest-api-app-1.herokuapp.com/

//auth

- POST api/auth/signup
  {
  "email": "123@ukr.net",
  "password": "1234567"
  }

- POST api/auth/login
  {
  "email": "123@ukr.net",
  "password": "1234567"
  }

- GET api/auth/current

- GET api/auth/logout

//users

- PATCH api/users
  {
  "subscription": ["starter", "pro", "business"]
  }

- PATCH api/users/avatars
  form-data: avatar

//usercontacts

- GET api/usercontacts

- POST api/usercontacts
  add
  {
  "name": "Adam Smith",
  "email": "123@ukr.net",
  "phone": "098-324-42-42"
  }

//contacts

- GET api/contacts

- GET api/contacts/:contactId

- POST api/contacts
  add
  {
  "name": "Adam Smith",
  "email": "123@ukr.net",
  "phone": "098-324-42-42"
  }

- PUT api/contacts/:contactId
  update
  {
  "name": "Piter Lewis"
  }

- DELETE api/contacts/:contactId
- PATCH api/contacts/:contactId/favorite
  update status
  {
  "favorite": true/false
  }
