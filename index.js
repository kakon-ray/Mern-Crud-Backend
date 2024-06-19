const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'*'
}))

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern_crud',{

}).then(()=>console.log('connection successfull')) 
  .catch(()=> console.log('Error'))


  const post_route = require('./routes/postRoute');
  app.use('/api',post_route);

  app.listen(8000, () => {
    console.log("server is running");
  });
