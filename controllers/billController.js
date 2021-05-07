import Bill from "../models/bill.model.js";

// Capture Reading
export async function captureBill(res, req) {
    try {
        let bill = await Bill.create(req.body);
        if (bill) {
            res.status(200).json({
                success: true,
                message: 'Bill created successfully',
                data: bill
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be created at this time'
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

// View Bill
export async function viewBill(res, req) {
    try {
        let allbills = await Bill.findAll({ where: { member_id: req.params.id } });
        if (allbills) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Bill records found.',
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
