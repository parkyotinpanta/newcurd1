const Product = require('../Models/Product')


exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product
            .findOne({ _id: id })
            .exec()
        res.send(producted)
    } catch (err) {
        console.log(err)
        res.send('Server err').res.status(500)
    }
}
exports.list = async (req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.send(product)
    } catch (err) {
        console.log(err)
        res.send('Server err').res.status(500)
    }
}
exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const producted = await Product(req.body).save()
        res.send(producted)
    } catch (err) {
        console.log(err);
        res.send('Server err').res.status(500)
    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updated = await Product
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()
        res.send(updated)
    } catch (err) {
        console.log(err);
        res.send('Server err').res.status(500)
    }
}
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const remove = await Product.findOneAndDelete({ _id: id }).exec()
        res.send(remove)
    } catch (err) {
        console.log(err);
        res.send('Server err').res.status(500)
    }
}

// สังเกตุถ้า err สังเกตุว่าพิมถูกมั้ยกับตัวใหญ่ตัวเล็ก