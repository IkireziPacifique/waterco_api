import Payment from "../models/payments.model.js";

// Capture Payment
export async function capturePayment(req, res) {
    try {
        let payment = await Payment.create(req.body);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Payment captured successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Payment could not be captured at this time'
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

// View All Payments
export async function viewPayment(req, res) {
    try {
        let allpayments = await Payment.findAll();
        if (allpayments) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: allpayments
            })
        } else {
            res.json({
                success: true,
                message: 'No Payment records found.',
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

// View Payments By Premise
export function viewPremisesPayment(req, res){
    console.log(req.body);
    res.send(req.body);
}