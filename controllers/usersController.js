import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import User from "../models/users.model.js";

dotenv.config();

// Sign Up/Add user
export async function addUser(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            let userObj = {
                email_address: req.body.email_address,
                password: hash,
                full_name: req.body.full_name
            }
            let user = await User.create(userObj);
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'User created successfully',
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User could not be created at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// LogIn user/
export async function logIn(req, res) {
    try {
        let user = await User.findAll({ where: { email_address: req.body.email_address } })
        if (!user) {
            return res.status(401).json({
                status: failed,
                message: "Authentication Failed: User with email address not found."
            })
        }
        bcrypt.compare(req.body.password, user.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: failed,
                    message: "Authentication Failed: Incorrect password."
                })
            }
            let authToken = jwt.sign({ Email: user.Email, UserID: user.UserID },
                process.env.AUTH_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: {
                    full_name: user.full_name,
                    email_address: user.email_address,
                    user_id: user.user_id
                },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View All Users
export async function viewAllUsers(req, res) {
    try {
        let allusers = await User.findAll();
        if (allusers) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Edit/Update User 
export async function updateUser(req, res) {
    try {
        let record = await User.update(req.body, {
            where: { CustomerId: req.params.id },
          });
        if (record) {
            res.status(200).json({
                success: true,
                message: 'User records updated successfully',
                data: record
            })
        } else {
            res.json({
                success: true,
                message: 'User not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Close User Account 
export async function closeUser(req, res) {
    try {
        let user = await User.delete({ where: { user_id: req.params.id } });
        if (user) {
            res.status(200).json({
                success: true,
                message: 'User was successfully deleted',
                // data: user
            })
        } else {
            res.json({
                success: true,
                message: 'User not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}