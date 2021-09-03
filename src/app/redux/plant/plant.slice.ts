import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import PlantsRepositoryImpl from "../../../data/repositories/PlantRepositoryImpl"
import Item from "../../../domain/entities/Plant"
import PlantService from "../../../domain/usecases/PlantService"
import type { RootState } from "../store"
// Define a type for the slice state
interface CounterState {
    loading: boolean
    plants: Array<Item>
}

// Define the initial state using that type
const initialState: CounterState = {
    loading: false,
    plants: [],
}

export const fetchList = createAsyncThunk("plantSlice/fetchList", async () => {
    const plantRepo = new PlantsRepositoryImpl()
    const plantService = new PlantService(plantRepo)
    const plants = await plantService.GetPlants()
    return plants
})
export const plantSlice = createSlice({
    name: "plantSlice",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchList.fulfilled, (state, action) => ({
            ...state,
            plants: action.payload,
            loading: false,
        }))
        builder.addCase(fetchList.pending, (state) => ({
            ...state,
            loading: true,
        }))
        builder.addCase(fetchList.rejected, (state) => ({
            ...state,
            loading: false,
        }))
    },
})

// Other code such as selectors can use the imported `RootState` type
export const plants = (state: RootState) => state.plantSlice.plants

export default plantSlice.reducer
