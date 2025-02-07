import { technologyActions } from '../slices/technology/technologySlice';
import { educationActions } from '../slices/education/educationSlice';
import { projectActions } from '../slices/project/projectSlice';
import { fetchTechnologies } from '../type/actionType';
import { fetchEducationInfos } from '../type/actionType';
import { fetchProjects } from '../type/actionType';


export const fetchTechnologyData = () => {
  return async (dispatch) => {
      dispatch({ type: fetchTechnologies, payload: technologyActions }); 
    }
  };

export const fetchEducationData = () => {
  return async (dispatch) => {
     dispatch({ type: fetchEducationInfos, payload: educationActions }); 
   }
  };



export const fetchProjectData = () => {
  return async (dispatch) => {
     dispatch({ type: fetchProjects, payload: projectActions }); 
    }
  };

