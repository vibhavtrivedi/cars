import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        carsSearch: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.carsSearch = action.payload;
        },
        addCar(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.name,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const updated = state.cars.filter((car) => {
                return car.id !== action.payloads
            })
            state.cars = updated;
        }

    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;