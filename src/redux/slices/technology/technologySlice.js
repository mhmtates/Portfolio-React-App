import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technologies: [
    { id: 1, title: "html", imageUrl: "/src/assets/technologies/html.png" },
    { id: 2, title: "css", imageUrl: "/src/assets/technologies/css.png" },
    { id: 3, title: "sass", imageUrl: "/src/assets/technologies/sass.png" },
    { id: 4, title: "bootstrap", imageUrl: "/src/assets/technologies/bootstrap.png" },
    { id: 5, title: "tailwind", imageUrl: "/src/assets/technologies/tailwind.png" },
    { id: 6, title: "js", imageUrl: "/src/assets/technologies/js.png" },
    { id: 7, title: "react", imageUrl: "/src/assets/technologies/react.png" },
    { id: 8, title: "npm", imageUrl: "/src/assets/technologies/npm.png" },
    { id: 9, title: "git", imageUrl: "/src/assets/technologies/git.png" },
    { id: 10, title: "csharp", imageUrl: "/src/assets/technologies/csharp.png" }
  ],
};

const technologySlice = createSlice({
  name: "technology",
  initialState,
  reducers: {
    setTechnologies(state) {
      return state; 
    },
  },
});

export const technologyActions = technologySlice.actions;
export default technologySlice.reducer;
