import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        //burayı projelere göre düzelt
        { id: 1, title: "html", imageUrl: " /src/assets/technologies/html.png" },
        { id: 2, title: "css", imageUrl: " /src/assets/technologies/css.png" },
        { id: 3, title: "sass", imageUrl: " /src/assets/technologies/sass.png" },
        { id: 4, title: "bootstrap", imageUrl: " /src/assets/technologies/bootstrap.png" },
        { id: 5, title: "tailwind", imageUrl: " /src/assets/technologies/tailwind.png" },
        { id: 6, title: "javascript", imageUrl: " /src/assets/technologies/js.png" },
        { id: 7, title: "react", imageUrl: " /src/assets/technologies/react.png" },
        { id: 8, title: "npm", imageUrl: " /src/assets/technologies/npm.png" },
        { id: 9, title: "git", imageUrl: " /src/assets/technologies/git.png" },
        { id: 10, title: "c#", imageUrl: " /src/assets/technologies/csharp.png" },
    ],
};

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
});

export default projectSlice.reducer;
