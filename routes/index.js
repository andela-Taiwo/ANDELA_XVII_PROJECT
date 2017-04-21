var express = require('express');
var router = express.Router();
var session = require('express-session');


var sess;


router.use(session({secret: 'ssshhhhh'}));

//Register
router.get('/',ensureAuthenticated, function(req,res){
  sess=req.session;
  var name=req.body.username;
  res.render('index.ejs',{name:name});
  

});

  // if the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()){
    return next();
  }else{
    req.flash("error_msg","You are not logged in");
    res.redirect('/users/login');


  }
}
//login



module.exports = router;


// module.exports = function(passport){
//     /* GET Home Page */
//   router.get('/home', isAuthenticated, function(req, res){
//     res.render('home', { user: req.user });
//   });
   
//   // As with any middleware it is quintessential to call next()
//   // if the user is authenticated
//   var isAuthenticated = function (req, res, next) {
//     if (req.isAuthenticated())
//       return next();
//     res.redirect('/');
//   }
 
//   /* GET login page. */
//   router.get('/', function(req, res) {
//     // Display the Login page with any flash message, if any
//     res.render('index', { message: req.flash('message') });
//   });
 
//   /* Handle Login POST */
//   router.post('/login', passport.authenticate('login', {
//     successRedirect: '/home',
//     failureRedirect: '/',
//     failureFlash : true 
//   }));
 
//   /* GET Registration Page */
//   router.get('/signup', function(req, res){
//     res.render('register',{message: req.flash('message')});
//   });
 
//   /* Handle Registration POST */
//   router.post('/signup', passport.authenticate('signup', {
//     successRedirect: '/home',
//     failureRedirect: '/signup',
//     failureFlash : true 
//   }));
 
//   return router;
// }