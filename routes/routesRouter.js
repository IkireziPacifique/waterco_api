import express from 'express';

import {addRoute, viewRoutes, updateRoute, viewPremisesRoute} from '../controllers/routesController.js'

const routeRouter = express.Router();

// Create Route route/
routeRouter.post("/", addRoute);

// View Routes route/
routeRouter.post("/", viewRoutes);

// Edit/Update Route route/
routeRouter.post("/", updateRoute);

// View Premises on Route route/:id
routeRouter.post("/:id", viewPremisesRoute);

export default routeRouter;