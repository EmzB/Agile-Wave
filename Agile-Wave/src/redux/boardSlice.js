import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data.json'

const boardSlice= createSlice({
    name:'boards',
    initialState: data.boards,
    reducers: {/**reducer functions go here */}
})