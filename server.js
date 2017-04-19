console.log("Server starting...");
const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var db

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

MongoClient.connect('mongodb://metalmount:metalmount%4082@ds163940.mlab.com:63940/notice-board',(err,database)=>{
  if(err) return console.log(err)
  	db = database;
  app.listen(3000, function(){
  console.log("listening on 3000");
})
});

app.get('/',(req,res) =>{
  res.render('index.ejs');  
});

app.get('/general', (req,res)=>{
	db.collection('announcements').find().toArray((err,result)=>{
		res.render('general.ejs',{announcements:result})
	})
})

app.get('/fellow', (req,res)=>{
	db.collection('announcements').find().toArray((err,result)=>{
		res.render('fellow.ejs',{announcements:result})
	})
})

app.get('/staff', (req,res)=>{
	db.collection('announcements').find().toArray((err,result)=>{
		res.render('staff.ejs',{announcements:result})
	})
})

app.post('/general',(req,res)=>{
	db.collection('announcements').save(req.body,(err,result)=>{
	  if(err) return console.log(err)	
	
	  console.log("saved to the database");
	  db.collection('announcements').find().toArray((err,results)=>{
	  	console.log(results)
	  })
	  res.redirect('/general');
	})
	
})

