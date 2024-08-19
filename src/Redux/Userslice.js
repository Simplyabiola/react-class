import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isfetching: false,
  alluser:[],
  fetcherror: null
}
export const userslice = createSlice({
    name: "user",
    initialState,
    reducers:{
        fetchingUser:(state)=>{
          state.isfetching = true
          state.alluseer =[]
          state.fetcherror = null
        },
        fetchingSuccessful:(state, action)=>{
            state.isfetching=false
            state.alluser = action.payload
            state.fetcherror =null
        },
        fetchingFaailed:(state, action)=>{
            state.isfetching=false
            state.alluser =[]
            state.fetcherror = action.payload
        }
    }
})

export const {fetchingFaailed, fetchingSuccessful, fetchingUser}= userslice.actions
export default  userslice.reducer