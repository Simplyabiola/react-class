
import { configureStore } from "@reduxjs/toolkit";
import   countslice from "./Counterslice";
import Userslice, { userslice } from "./Userslice";

export default configureStore({
   reducer: {
    countslice, Userslice
   }
})

