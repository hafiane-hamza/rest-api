import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders fetch'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order created'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    })
});