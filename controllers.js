const Tracker = require('./model')

exports.getAll = async (req, res) => {
    try {
        const Data = await Tracker.find()

        res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getAllIncome = async (req, res) => {
    try {
        const Data = await Tracker.find({ type: 'income' })

        res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getAllExpense = async (req, res) => {
    try {
        const Data = await Tracker.find({ type: 'expense' })

        res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getDataById = async (req, res) => {
    try {
        const Data = await Tracker.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const Data = await Tracker.find()

        res.status(200).json({
            status: 'success',
            data: Data
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.createData = async(req, res) => {
    try {

        const newData = await Tracker.create(req.body)

        res.status(200).json({
            status: 'success',
            data: newData
        })

    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateData = async(req, res) => {
    try {

        const Data = await Tracker.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: Data
        })

    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteData = async(req, res) => {
    try {
        await Tracker.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            data: null
        })

    } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
}