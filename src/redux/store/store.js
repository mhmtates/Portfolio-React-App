import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../slices/technology/technologySlice";
import educationReducer from "../slices/education/educationSlice";
import projectReducer from "../slices/project/projectSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        technologies: technologyReducer,
        educationInfos: educationReducer,
        projects: projectReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

});

export default store;
