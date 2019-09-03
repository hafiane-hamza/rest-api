import express from 'express';


const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET Products"
    })
});
router.post('/', (req, res, next)=> {
    res.status(200).json({
        message: "POST Products"
    })
});
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == '123') {
        res.status(200).json({
            message: 'productId 123'
        });
    } else {
        res.status(200).json({
            message: "A new id"
        })
    }
});
router.patch('/', (req, res, next)=> {
    res.status(200).json({
        message: "UPDATE Products"
    })
});
router.delete('/', (req, res, next)=> {
    res.status(200).json({
        message: "DELETE Products"
    })
});


module.exports = router;