import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  projects: [
    { id: 1, category: "Frontend", title: "News Site", description: "Grid yapısını kullanarak yapmış olduğum bir haber sitesi", url: "https://github.com/mhmtates/News-Site", image: "/src/assets/project/NewsSite.jpg" },
    { id: 2, category: "Frontend", title: "Deluxe Hotel", description: "Flexbox yapısını kullanarak yapmış olduğum bir otel sitesi", url: "https://github.com/mhmtates/Deluxe-Hotel", image: "/src/assets/project/DeluxeHotel.jpg" },
    { id: 3, category: "Frontend", title: "Blog Site", description: "Bootstrap'in bazı bileşenleri kullanılarak hazırlanmış bir blog sitesidir.", url: "https://github.com/mhmtates/bootstrap-blog-site", image: "/src/assets/project/BlogSite.jpg" },
    { id: 4, category: "FrontEnd", title: "AtesStore", description: "Bootstrap'in bazı bileşenlerini kullanarak yaptığım bir e-ticaret sitesi.", url: "https://github.com/mhmtates/Bootstrap-Ecommerce-AtesStore", image: "/src/assets/project/AtesStore.jpg" },
    { id: 5, category: "Frontend", title: "AtesTV", description: "Dizi-film projesi.Projede,diziler ve filmler türlerine göre gösterilmektedir.", url: "https://github.com/mhmtates/Bootstrap-Movie-Series-AtesTV", image: "/src/assets/project/AtesTV.jpg" },
    { id: 6, category: "Frontend", title: "BucketList", description: "Ölmeden önce yapılacaklar listesini gösteren bir proje", url: "https://github.com/mhmtates/BucketList", image: "/src/assets/project/BucketList.jpg" },
    { id: 7, category: "Frontend", title: "Quiz App", description: "Çoktan seçmeli sorulardan oluşan bir quiz uygulaması.", url: "https://github.com/mhmtates/QuizApp", image: "/src/assets/project/QuizApp.jpg" },
    { id: 8, category: "Frontend", title: "Music Player", description: "Yerli ve yabancı şarkılardan oluşan bir müzik çalar uygulaması", url: "https://github.com/mhmtates/MusicPlayer", image: "/src/assets/project/MusicPlayer.jpg" },
    { id: 9, category: "Frontend", title: "MoviesTVSeriesApp", description: "React ChakraUI framework'üyle TMDB API'den filmleri ve dizileri getiren bir proje", url: "https://github.com/mhmtates/Movies-TvSeries-App", image: "/src/assets/project/MoviesTVSeriesApp.jpg" },
    {id: 10, category: "Backend", title: "Kodlama IO Devs", description: "Engin Demiroğ .Net Yazılım Geliştirici Yetiştirme Kampı Kodlama.Io.Devs Projesi Ödevler", url:"https://github.com/mhmtates/Kodlama.io.Devs", image: "/src/assets/project/KodlamaIO.png"},
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects(state) {
      return state;
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;
