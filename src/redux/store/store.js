import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../slices/technology/technologySlice";
import projectReducer from "../slices/project/projectSlice";

export const store = configureStore ({
     reducer:{
        technologies: technologyReducer,
        projects: projectReducer
    },

});

export default store;