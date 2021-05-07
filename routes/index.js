import express from 'express';
import memberRouter from "./membersRouter.js";
import premisesRouter from "./premisesRouter.js";
import billRouter from "./billRouter.js";
import PaymentRouter from "./paymentsRouter.js";
import routeRouter from "./routesRouter.js";
import userRouter from "./usersRouter.js";

const router = express.Router();

router.use("/members", memberRouter);
router.use("/premises", premisesRouter);
router.use("/bills", billRouter);
router.use("/payments", PaymentRouter);
router.use("/routes", routeRouter);
router.use("/users", userRouter);

export default router;