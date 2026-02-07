import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route: user login
export const loginUser = async (req, res) => {
  // res.json({ msg: "LOGIN API WORKING" });
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User dosen't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Error in registerUser:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// route: user register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    // validate password length
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters long" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log("Error in registerUser:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// route: admin login
export const adminLogin = async (req, res) => {
  // res.json({ msg: "ADMIN LOGIN API WORKING" });
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
  }
  } catch (error) {
     console.log("Error in registerUser:", error.message);
    res.json({ success: false, message: error.message });

  }
};
