const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Car = require("./models/carModel");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb+srv://swilliamsprsvr:Hanselpunch1212%23@learnmongodb.n6huciq.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB", 
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.post("/car", async(req, res) => {
    try {
        const car = new Car(req.body)
        await car.save()
        res.status(201).send(car)
    } catch(error) {
        res.status(400).send(error)
    }
});

app.get("/cars", async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).send(cars);
    }catch(error){
        res.status(500).send(error)
    }
});


app.get("/car/:id", async (req, res) => {
    const carId = req.params.id;
    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).send({ message: "Car not found" });
        }
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/cars/make/:make', async (req, res) => {
    try {
        const { make } = req.params;
        const cars = await Car.find({ make: make }); 
        res.status(200).json(cars);
    } catch (error) {
        console.error("Error fetching cars by make", error);
        res.status(500).send(error);
    }
});



app.delete("/car/:id", async (req, res) => {
    const carId = req.params.id;
    try {
        await Car.deleteOne({_id: carId});
        res.status(200).send({ message: "Car successfully deleted"})
    }catch(error){
        res.status(500).send(error)
    }
});

app.put("/car/:id", async (req, res) => {
    const carId = req.params.id;
    try{
        const car = await Car.findOneAndUpdate({_id: carId}, req.body);
        await car.save();
        res.status(200).send(car);
    }catch(error){
        res.status(500).send(error);
    }
});


const port = 3000;
app.listen(port, () => {console.log("server running on port " + port);
});

