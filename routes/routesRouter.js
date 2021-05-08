import express from 'express';

import {addRoute, viewRoutes, updateRoute, viewPremisesRoute} from '../controllers/routesController.js'

const routeRouter = express.Router();

// Create Route route/
routeRouter.post("/", addRoute);

// View Routes route/
routeRouter.get("/", viewRoutes);

// Edit/Update Route route/
routeRouter.put("/", updateRoute);

// View Premises on Route route/:id
routeRouter.get("/:id", viewPremisesRoute);

export default routeRouter;