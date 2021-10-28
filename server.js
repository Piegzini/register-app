const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(express.text());
server.use(cors());

let lastAddedId = 0;
const users = [];

server.get('/users', (req, res) => res.send(JSON.stringify(users)));

server.get('/user/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id, 10));
  res.send(JSON.stringify(user));
});

server.post('/user', (req, res) => {
  const {username, password} = req.body;
  console.log(username, password)
  const thisUserNameAlreadyExist = users.some((user) => user.username === username);
  if (!thisUserNameAlreadyExist) {
    const user = {id: lastAddedId, username, password, date: new Date()};
    users.push(user);
    lastAddedId++;
    res.send('Success');
  } else {
    res.status(404).send('Failed');
  }
});

server.delete('/user/:id', (req, res) => {
  const userIndex = users.findIndex((user) => user.id === parseInt(req.params.id, 10));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send(JSON.stringify(users));
  } else {
    res.status(404).send('failed');
  }
});

server.listen(4000, () => console.log(`Start on 4000`))
