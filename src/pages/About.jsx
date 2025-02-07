import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnologyData } from "../redux/action/action";
import { fetchEducationData } from "../redux/action/action";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const dispatch = useDispatch();
  const technologyData = useSelector((state) => (state).technologies.technologies);
  const educationData = useSelector((state) => (state).educationInfos.educationInfos)

  useEffect(() => {
    dispatch(fetchTechnologyData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);

  return (
    <>
      <main className="container mx-auto">
        <section className="section-top">
          <h1 className="text-center text-3xl font-bold mt-12"> Biyografi </h1>
          <p className="m-8 text-justify text-lg">
            Merhaba,ben Mehmet Ateş Özateş. 35 yaşındayım ve istanbul'da yaşıyorum.Freelance web geliştiriciyim. 2013 yılında İhsan Doğramacı Bilkent Üniversitesi Matematik bölümünden mezun olduktan sonra 2018 yılında Yeditepe Üniversitesi İşletme bölümünde yüksek lisans yaptım.2021 yılında Infotech Akademi'de yazılım uzmanlığı kursuna gittim ve orada backend'de c#,dotnet/dotnetcore frontend'de de html,css,bootstrap,javascript  ve veritabanında mssqlserver teknolojileri üzerine bir eğitim aldım ve eğitim sırasında bir masaüstü ve bir web projesi geliştirdim. Daha sonra, Udemy, Patika.Dev, Kodlama.io gibi online platformlarda backend ve frontend üzerine eğitimler almaya devam ederek yazılım alanında kendimi geliştirdim. 2022 yılından itibaren WebAAG şirketi için freelancer olarak responsive web siteleri yapmaktayım. Bu süre zarfında,  sass ve tailwind(css) ve react.js gibi teknolojileri de öğrendim. Sonuç olarak, yeni teknolojiler öğrenerek kendini sürekli geliştiren ve araştırmayı seven bir yapıya sahibim.
          </p>
        </section>


        <section className="px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-zinc-950">Teknolojiler</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {technologyData?.map((tech) => (
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

        <section className="px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-10 text-zinc-950">Eğitim</h1>
          <VerticalTimeline>
            {educationData.map((edu) => (
              <VerticalTimelineElement
                key={edu.id}
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#f3f4f6", color: "#333", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}
                contentArrowStyle={{ borderRight: "7px solid  #f3f4f6" }}
                date={edu.year} 
                iconStyle={{ background: "#4A90E2", color: "#fff" }}
                icon={<FaGraduationCap />}
              >
                <h3 className="text-xl font-bold mb-4">{edu.title}</h3>
                <h4 className="text-md text-gray-700 mb-4">{edu.faculty}</h4>
                <h4 className="text-md text-gray-700 mb-4">{edu.department} - {edu.degree}</h4> 
               
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </main>
    </>
  );
};

export default About;
