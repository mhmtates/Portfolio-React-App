import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../slices/technology/technologySlice";


export const store = configureStore ({
     reducer:{
        technologies: technologyReducer
    },

});

export default store;