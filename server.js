const express = require('express');
const app = express();
const bodyparser= require('body-parser');
const port = 3400;

app.use(bodyparser.urlencoded({extended:true}))


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/info/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.param; 
  

  const info = {
    id,
    name
  };

  res.json(info);
});

app.use(express.json());

app.get('/api/data', (req, res) => {
  const jsonData = req.body;

  
  const dataArray = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bobjohnson@example.com"
  }
];
  
  res.json(dataArray);
  
});
