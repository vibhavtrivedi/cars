import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        carsSearch: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.carsSearch = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated;
        }

    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;