import express from 'express';
import {addMember, viewMember, updateMember, viewAllMembers, deleteMember} from '../controllers/membersController.js'

const memberRouter = express.Router();

// Add a Member member/
memberRouter.post("/", addMember);

// View a member  member/:id
memberRouter.get("/:id", viewMember);

// View all members  member/ 
memberRouter.get("/", viewAllMembers);

// Update member record  member/
memberRouter.put("/:id", updateMember);

// Delete a member  member/:id
memberRouter.delete("/:id", deleteMember);

export default memberRouter;