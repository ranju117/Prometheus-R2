const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../../models/User");
const userModel = require("../../models/User");

   
 
    const connectDatabase = async () => {
      try {
        mongoose.set("useNewUrlParser", true);
        
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
      }).then(()=>console.log("DB Connected"))
      .catch((err)=>console.log(err));
    
        console.log("connected to database");
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    };
    
    connectDatabase();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/post
 **/
router.post('/post', (req, res) => {
  console.log('inside post');
  console.log(req.body.formUserName);  
  var post = new User({
        username: req.body.formUserName,
        password: req.body.password
      })
      post.save(function (err, res) {
        if (err) { return next(err) }
        //res.json(201, res)
      })
});

/**
 * @method GET
 * @access public
 * @endpoint /api/v1/get
 **/
router.get('/get', async(req, res) => {
    const users =await userModel.findOne({username:req.query.username});
    console.log(req.query.username);
    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  
});
module.exports=router;