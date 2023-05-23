const User = require("../../model/UserRegister/UserRegister");
const bcrypt = require("bcrypt")
const UserRegister = async (req, res) => {
  try {
    const { firstName, middleName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
//bcrypt password before save database 
const saltedRounds = 10;
const bcryptPassword = await bcrypt.hash(password, saltedRounds)
    // Create a new user
    const newUser = new User({
      firstName,
      middleName,
      lastName,
      email,
      password:bcryptPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in registering user",
      error: error.message,
    });
  }
};

module.exports = UserRegister;
