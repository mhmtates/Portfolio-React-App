import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechnologyList } from "../redux/action/action";

const About = () => {
  const dispatch = useDispatch();
  const technologyList = useSelector((state) => (state).technologies.technologies); // Direkt Redux state kullan

  useEffect(() => {
    dispatch(getTechnologyList()); // Redux store'dan veriyi al
  }, [dispatch]);
  return (
    <>
      <main className="container mx-auto">
        {/* Biyografi Bölümü */}
        <section className="section-top">
          <h1 className="text-center text-3xl font-bold mt-12"> Biyografi </h1>
          <p className="m-8 text-justify text-lg">
          Merhaba,ben Mehmet Ateş Özateş. 35 yaşındayım ve istanbul'da yaşıyorum.Freelance web geliştiriciyim. 2013 yılında İhsan Doğramacı Bilkent Üniversitesi Matematik bölümünden mezun olduktan sonra 2018 yılında Yeditepe Üniversitesi İşletme bölümünde yüksek lisans yaptım.2021 yılında Infotech Akademi'de yazılım uzmanlığı kursuna gittim ve orada backend'de c#,dotnet/dotnetcore frontend'de de html,css,bootstrap,javascript  ve veritabanında mssqlserver teknolojileri üzerine bir eğitim aldım ve eğitim sırasında bir masaüstü ve bir web projesi geliştirdim. Daha sonra, Udemy, Patika.Dev, Kodlama.io gibi online platformlarda backend ve frontend üzerine eğitimler almaya devam ederek yazılım alanında kendimi geliştirdim. 2022 yılından itibaren WebAAG şirketi için freelancer olarak responsive web siteleri yapmaktayım. Bu süre zarfında,  sass ve tailwind(css) ve react.js gibi teknolojileri de öğrendim. Sonuç olarak, yeni teknolojiler öğrenerek kendini sürekli geliştiren ve araştırmayı seven bir yapıya sahibim.
          </p>
        </section>

        {/* Teknolojiler Bölümü */}
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-zinc-950">Teknolojiler</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            
            {technologyList?.map((tech) => (
                <li
                  key={tech.id}
                  className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                >
                  <img
                    src={tech.imageUrl}
                    alt={tech.title}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <span className="text-lg font-bold text-gray-700 capitalize">{tech.title}</span>
                </li>
              ))}
            </ul>
        </section>
      </main>
    </>
  );
};

export default About;
