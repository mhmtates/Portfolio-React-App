import { db } from "../../firebase/firebase"; // Adjust the import path
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
  getTechnologies, getProjects
} from "../type/type";
// technologies

export const allTechnologies = () => {
  return async (dispatch) => {
    try {
      const technologiesRef = collection(db, "technologies"); // Use the initialized db
      const technologiesQuery = query(technologiesRef, orderBy("technologyNum")); // Use the initialized db

      const snapshot = await getDocs(technologiesQuery); // Use get() to retrieve data

      if (snapshot.empty) {
        throw new Error("Böyle bir teknoloji bulunamadı."); // Handle the case when no technologies are found
      }

      const technologiesArray = snapshot.docs.map(doc => ({
        id: doc.id, // Use the document ID
        ...doc.data(), // Spread the document data
      }));
      console.log(technologiesArray);
      dispatch({ type: getTechnologies, data: technologiesArray });
    } catch (error) {
      console.error("Teknoloji verilerini getirme işleminde bir sorun oluştu:", error);
      // Optionally dispatch an error action
      dispatch({ type: "TEKNOLOJİ_HATA", error: error.message });
    }
  };
};

// work
export const allProjects = () => {
  return async (dispatch) => {
    try {
      const projectRef = collection(db, "project"); // Use the initialized db
      const projectQuery = query(projectRef, orderBy("projectNum")); // Use the initialized db

      const snapshot = await getDocs(projectQuery); // Use get() to retrieve data

      if (snapshot.empty) {
        throw new Error("Böyle bir proje bulunamadı."); // Handle the case when no work are found
      }

      const projectArray = snapshot.docs.map(doc => ({
        id: doc.id, // Use the document ID
        ...doc.data(), // Spread the document data
      }));
      // console.log(projectArray);
      dispatch({ type: getProjects, data: projectArray });
    } catch (error) {
      console.error("Proje verilerini getirme işleminde bir sorun oluştu:", error);
      // Optionally dispatch an error action
      dispatch({ type: "PROJE_HATA", error: error.message });
    }
  };
};
