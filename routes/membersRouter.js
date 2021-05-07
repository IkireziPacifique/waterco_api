import express from 'express';
import {addMember, viewMember, updateMember, viewAllMembers, deleteMember} from '../controllers/membersController.js'
import {authenticate} from '../middlewares/auth.js';

const memberRouter = express.Router();

// Add a Member member/
memberRouter.post("/", authenticate, addMember);

// View a member  member/:id
memberRouter.get("/:id", authenticate, viewMember);

// View all members  member/ 
memberRouter.get("/", authenticate, viewAllMembers);

// Update member record  member/
memberRouter.put("/", authenticate, updateMember);

// Delete a member  member/:id
memberRouter.delete("/:id", authenticate, deleteMember);

export default memberRouter;