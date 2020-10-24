const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js");//Checks that a user has been authenticated
const userController = require('../controllers/userControllers');
const dateControllers = require('../controllers/dateControllers');

// API Routes
router.use("/api", apiRoutes );

// dashboard route 
router.get('/', isAuthenticated, function (req, res) {
  // if the user is authenticated redirect to dashboard
  res.redirect('/dashboard');
});

// LOGIN route
router.post('/api/login', passport.authenticate('local'), function(req, res) {
     res.json(req.user);
  });

// // dashboard route attempt from saturday oct 24 
// router.get('/dashboard', function (req, res) {
//   console.log("SERVER SIDE  - route hit")
//   if (req.user){
//     res.json("true")
//   } else if (req.user = undefined){
//     res.json("false")
//   }
 

// });

// router.get("/api/dates", (req, res) => {
//   console.log("SERVER SIDE - loading community")
//   dateControllers.getAllDates(req, res);
// });


router.get("/logout", function (req, res) {
  console.log(req.user)
  req.logout();
  console.log(req.user)
  res.redirect("/");
});



router.get("/api/allusers", (req, res) => {
  console.log("SERVER SIDE - loading community")
  userController.getAllUsers(req, res);
});

router.get("/api/community", (req, res) => {
  console.log("SERVER SIDE - loading community")
  userController.getUserCommunity(req, res);
});

router.get("/api/profile", (req, res) => {
  console.log("SERVER SIDE - loading profile of the user logged in")
  userController.getUserProfile(req, res);
});

router.get("/api/user/:id", (req, res) => {
  console.log("SERVER SIDE - loading profile of one user")
  userController.getOneUser(req, res);
});

router.put('/api/user/:id', (req, res) => {
  console.log("SERVER SIDE - updating a user profile")
  userController.updateProfile(req, res)
});











// router.post('/api/dates', (req, res )=> {
//   dateControllers.newDate(req)  
// })
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;





