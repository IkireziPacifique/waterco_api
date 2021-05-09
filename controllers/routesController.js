import Route from "../models/routes.model.js";

// Create Route
export async function addRoute(req, res) {
    try {
        let route = await Route.create(req.body);
        if (route) {
            res.status(200).json({
                success: true,
                message: 'Route created successfully',
                data: route
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Route could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Routes
export async function viewRoutes(req, res) {
    try {
        let allroutes = await Route.findAll();
        if (allroutes) {
            res.json({
                success: true,
                message: 'Route records retrieved successfully',
                data: allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No Route records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Edit/Update Route
export async function updateRoute(req, res) {
    try {
        let record = await Route.update(req.body);
        if (record) {
            res.status(200).json({
                success: true,
                message: 'Route records updated successfully',
                data: book
            })
        } else {
            res.json({
                success: true,
                message: 'Route not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Premises on Route
export async function viewPremisesRoute(res, req) {
    try {
        let allroutes = await Route.findAll({ where: { member_id: req.params.id } });
        if (allroutes) {
            res.json({
                success: true,
                message: 'Route records retrieved successfully',
                data: allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No Route records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}