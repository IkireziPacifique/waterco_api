import express from 'express';
import {addPremises, viewAllPremises, viewMemberPremises, updatePremises, viewPremises} from '../controllers/premisesController.js'

const premisesRouter = express.Router();

// Create A Premise premises/
premisesRouter.post("/", addPremises);

// View All Premises premises/
premisesRouter.get("/", viewAllPremises);

// View Member Premises premises/:member_id
premisesRouter.get("/:CustomerId", viewMemberPremises);

// Update Premise premises/
premisesRouter.put("/:id", updatePremises);

// View Premise premises/
premisesRouter.get("/:id", viewPremises);

export default premisesRouter;

