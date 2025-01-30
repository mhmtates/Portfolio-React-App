import { getTechnologies } from "../type/type";
//Projeler eklenecek

const initialState = {
    technologies: [],
};

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case getTechnologies:
            return { ...state, technologies: action.payload };
        default:
            return state;
    }
}