import express from 'express';
import {addUser, logIn, viewAllUsers, updateUser, closeUser} from '../controllers/usersController.js'
import {authenticate} from '../middlewares/auth.js';

const userRouter = express.Router();

// Sign Up user/
userRouter.post("/", addUser);

// LogIn user/:id
userRouter.post("/login", authenticate, logIn);

// View All Users user/
userRouter.get("/", authenticate, viewAllUsers);

// Edit/Update User user/
userRouter.put("/", authenticate, updateUser);

// Close User Account user/:id
userRouter.delete("/:id", authenticate, closeUser);

export default userRouter;


