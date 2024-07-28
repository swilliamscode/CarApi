const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    make: { type: String, required: true, default: "unknown"},
    model: { type: String, required: true },
    year: Number,
    price: { type: Number, required: true, default: 0},
    photo: { type: String, default: "“https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc3-y63KN_r5LwOC9PNqpwc5C1JPeN36_ug&s"},
    rating: Number,
    mileage: { type: Number, required: true },
    oneOwner: Boolean,
    status: { type: String, enum: ["SOLD", "AVAILABLE", "PENDING"], default: "AVAILABLE"},
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;