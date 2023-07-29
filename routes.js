const express = require('express');
const trackerController = require('./controllers');

const router = express.Router()

router
    .route('/')
    .get(trackerController.getAll)
    .post(trackerController.createData)

router
    .route('/income')
    .get(trackerController.getAllIncome)

router
    .route('/expense')
    .get(trackerController.getAllExpense)


router
    .route('/:id')
    .get(trackerController.getDataById)
    .patch(trackerController.updateData)
    .delete(trackerController.deleteData)

module.exports = router;