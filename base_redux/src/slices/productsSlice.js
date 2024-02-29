import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const productsSlice = createSlice({
    name: 'products', initialState, reducers: {
        setProducts: (state, action) => {
            state.push(...action.payload)
        }
    },
})
export const {setProducts} = productsSlice.actions

export default productsSlice.reducer