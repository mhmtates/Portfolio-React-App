import { technologyActions } from '../slices/technology/technologySlice';
import { projectActions } from '../slices/project/projectSlice';
import { getTechnologies } from '../type/actionType';
import { getProjects } from '../type/actionType';

// Teknolojileri Yükleme Aksiyonu
export const getTechnologyList = () => {
  return async (dispatch) => {
    try {
      // Veriyi al (Burada API'den çekiyorsan, bir fetch işlemi yapılabilir)
      dispatch({type:getTechnologies,payload:technologyActions}); // Redux store'a veriyi gönder
    } catch (error) {
      console.error("Teknoloji listesi yüklenirken hata oluştu:", error);
    }
  };
};

// Projeleri Yükleme Aksiyonu
export const getProjectList = () => {
  return async (dispatch) => {
    try {
      dispatch({type:getProjects,payload:projectActions}); // Redux store'a güncelleme yap
    } catch (error) {
      console.error("Proje listesi yüklenirken hata oluştu:", error);
    }
  };
};
