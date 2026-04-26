const express = require("express");
const router = express.Router();
const Register = require("../models/Register");

//index page
router.get('/',(req,res)=>{
    res.render('index')
});

//login page
router.get('/login',(req,res)=>{
    res.render('login')
});

//password page
router.get('/password',(req,res)=>{
    res.render('password')
});

//add sales to the database
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const { inputFirstName, inputLastName, inputEmail, inputPhone, inputNIN, inputRole, inputPassword } = req.body;
    // Check if user already exists
    let existingUser = await Register.findOne({ inputNIN: inputNIN.toUpperCase() });
    if (existingUser) {
      return res.render("register", { error: "NIN is already registered!" });
    }
    //create new user:
    const newUser = new Register({
      inputFirstName,
      inputLastName,
      inputEmail:inputEmail.toLowerCase(),
      inputPhone,
      inputNIN:inputNIN.toUpperCase(),
      inputRole,
      inputPassword,
    });
    console.log(newUser);
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.error(error)
    res.render ("register", { error:error.message})
  }  
});
//Get sales from the database
router.get("/staffList", (req, res) => {
  res.render("register");
});

module.exports = router;
