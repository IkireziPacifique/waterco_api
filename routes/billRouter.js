import express from 'express';
import {captureBill, viewBill} from '../controllers/billController.js';

const billRouter = express.Router();

// Capture Reading bill/
billRouter.post("/", captureBill);

// View Bill bill/:id
billRouter.get("/:id", viewBill);

export default billRouter;