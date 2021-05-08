import express from 'express';
import {addUser, logIn, viewAllUsers, updateUser, closeUser} from '../controllers/usersController.js'

const userRouter = express.Router();

// Sign Up user/
userRouter.post("/", addUser);

// LogIn user/:id
userRouter.post("/login", logIn);

// View All Users user/
userRouter.get("/", viewAllUsers);

// Edit/Update User user/
userRouter.put("/:id", updateUser);

// Close User Account user/:id
userRouter.delete("/:id", closeUser);

export default userRouter;


