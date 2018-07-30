const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js')

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/add', (req, res) => {
  console.log('task in db ', req.body.taskText)
  const testTodo = new TodoItem({
    task: req.body.taskText
  });
  console.log(testTodo);
  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });


module.exports = router;
