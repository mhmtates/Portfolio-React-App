import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../slices/technologySlice";

export const store = configureStore ({
     reducer:{
        technologies: technologyReducer,
     },

});

export default store;