import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technologies: [
    { id: 1, title: "html", imageUrl: "/src/assets/technology/html.png" },
    { id: 2, title: "css", imageUrl: "/src/assets/technology/css.png" },
    { id: 3, title: "sass", imageUrl: "/src/assets/technology/sass.png" },
    { id: 4, title: "bootstrap", imageUrl: "/src/assets/technology/bootstrap.png" },
    { id: 5, title: "tailwind", imageUrl: "/src/assets/technology/tailwind.png" },
    { id: 6, title: "js", imageUrl: "/src/assets/technology/js.png" },
    { id: 7, title: "react", imageUrl: "/src/assets/technology/react.png" },
    { id: 8, title: "npm", imageUrl: "/src/assets/technology/npm.png" },
    { id: 9, title: "git", imageUrl: "/src/assets/technology/git.png" },
    { id: 10, title: "csharp", imageUrl: "/src/assets/technology/csharp.png" }
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
