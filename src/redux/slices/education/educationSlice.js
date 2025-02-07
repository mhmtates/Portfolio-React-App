import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationInfos: [
        { id: 1, title: "Nişantaşı Anadolu Lisesi", year: "2002-2005" },
        { id: 2, title: "İhsan Doğramacı Bilkent Üniversitesi", year: "2006-2013", faculty: "Fen Fakültesi", department: "Matematik", degree:"Lisans" },
        { id: 3, title: "Yeditepe Üniversitesi", year: "2016-2018", faculty: "Sosyal Bilimler Enstitüsü", department: "İşletme", degree:"Yüksek Lisans" },
    ],
};

const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        setEducation(state) {
            return state;
        },
    },
});

export const educationActions = educationSlice.actions;

export default educationSlice.reducer;

