import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../slices/technology/technologySlice";
import projectReducer from "../slices/project/projectSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        technologies: technologyReducer,
        projects: projectReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

});

export default store;
