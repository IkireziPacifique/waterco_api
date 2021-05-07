import express from 'express';
import {capturePayment, viewPayment, viewPremisesPayment} from '../controllers/paymentsController.js'

const PaymentRouter = express.Router();
 
// Capture Payment payment/
PaymentRouter.post("/", capturePayment);

// View All Payments payment/
PaymentRouter.get("/", viewPayment);

// View Payments By Premise payment/:id
PaymentRouter.get("/:id", viewPremisesPayment);

export default PaymentRouter;