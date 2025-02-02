import { getTechnologies } from "../type/type";
import { getProjects } from "../type/type";

const initialState = {
    technologies: [],
    projects: []
};

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case getTechnologies:
            return { ...state, technologies: action.payload };
        case getProjects:
            return { ...state, projects: action.payload };
        default:
            return state;
    }
}