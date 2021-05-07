import express from 'express';
import {addPremises, viewAllPremises, viewMemberPremises, updatePremises, viewPremises} from '../controllers/premisesController.js'

const premisesRouter = express.Router();

// Create A Premise premises/
premisesRouter.post("/", addPremises);

// View All Premises premises/
premisesRouter.get("/", viewAllPremises);

// View Member Premises premises/:id
premisesRouter.get("/:id", viewMemberPremises);

// Update Premise premises/
premisesRouter.put("/", updatePremises);

// View Premise premises/
premisesRouter.get("/", viewPremises);

export default premisesRouter;

