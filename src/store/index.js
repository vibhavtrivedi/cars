import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";
import { formReducers, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducers
    }
})

export {store, changeSearchTerm, addCar, removeCar, changeCost, changeName}