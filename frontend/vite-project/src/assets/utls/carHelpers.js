import axios from "axios";

const getAllCars = async () => {
    try{
        const response = await fetch("http://localhost:3000/cars");
        const cars = await response.json();

        return cars;
    }catch(error){
        console.error(error);
    }
};

const createCar = async (make, model, year, price, photo, rating, mileage, oneOwner, status) => {
    try {
        const response = await fetch("http://localhost:3000/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ make, model, year, price, photo, rating, mileage, oneOwner, status}),
        });

        if (!response.ok) {
            throw new Error("Response status: " + response.status)
        }

        const car = await response.json()
        console.log(car);
    }catch(error){
        console.error(error);
    }
};

const deleteCar = (id) => {
    axios.delete(`http://localhost:3000/car/${id}`).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.error(error)
    })
};

const updateCar = (id, payload) => {
    axios.put(`http://localhost:3000/car/${id}`, payload)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error)
    })  
};


export { getAllCars, createCar, deleteCar, updateCar };