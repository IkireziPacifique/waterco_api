import Premise from "../models/premises.model.js";


// Create A Premise 
export async function addPremises(res, req) {
    try {
        let premise = await Premise.create(req.body);
        if (premise) {
            res.status(200).json({
                success: true,
                message: 'Premise created successfully',
                data: premise
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Premise could not be created at this time'
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

// View All Premises 
export async function viewAllPremises(res, req) {
    try {
        let allpremises = await Premise.findAll();
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
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

// View Member Premises 
export async function viewMemberPremises(res, req) {
    try {
        let allmembers = await Premise.findAll({ where: { member_id: req.params.id } });
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member premise records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member premise records found.',
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

// Update Premise 
export async function updatePremises(req, res) {
    try {
        let premise = await Premise.update(req.body);
        if (premise) {
            res.status(200).json({
                success: true,
                message: 'Premise records updated successfully',
                data: premise 
            })
        } else {
            res.json({
                success: true,
                message: 'Member not found.',
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

// View Premise 
export async function viewPremises(res, req) {
    try {
        let allpremises = await Premise.findAll({ where: { member_id: req.params.id } });
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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