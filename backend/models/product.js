const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    imgUrl: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;













































