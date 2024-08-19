import {createSlice} from "@reduxjs/toolkit";


export const countslice = createSlice({
    name:"count",
    initialState: {
        value:0,
        increase: true
    },
    reducers:{
        Increment:(state)=>{
            state.value += 1
        },
        Decrement:(state)=>{
            if(state.value == 0){
                return
            } else {
                state.value -= 1
            }
            },

        incrementByAmount:(state, action)=>{
            state.value += action.payload
        }
    }
})

export default countslice.reducer
export const {Increment, Decrement, incrementByAmount} = countslice.actions