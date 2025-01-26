
import { useSelector } from "react-redux";

const About = () => {

  const technologies = useSelector((state) => state.technologies.technologies);


  return (
    <>
      <main className="container mx-auto">
        <section className="section-top">
          <h1 className="text-center text-3xl font-bold"> Biyografi </h1>
          <p className="m-8 text-justify text-lg">
            Merhaba,ben Mehmet Ateş Özateş. 35 yaşındayım ve istanbul'da yaşıyorum.Freelance web geliştiriciyim. 2013 yılında İhsan Doğramacı Bilkent Üniversitesi Matematik bölümünden mezun olduktan sonra 2018 yılında Yeditepe Üniversitesi İşletme bölümünde yüksek lisans yaptım.2021 yılında Infotech Akademi'de yazılım uzmanlığı kursuna gittim ve orada backend'de <span className="font-bold">c#,dotnet/dotnetcore</span> frontend'de de <span className="font-bold">html,css,bootstrap,javascript </span> ve veritabanında <span className="font-bold">mssqlserver</span> teknolojileri üzerine bir eğitim aldım ve eğitim sırasında bir masaüstü ve bir web projesi geliştirdim. Daha sonra, <span className="font-bold">Udemy, Patika.Dev, Kodlama.io </span> gibi online platformlarda backend ve frontend üzerine eğitimler almaya devam ederek yazılım alanında kendimi geliştirdim. 2022 yılından itibaren AAG şirketi için freelancer olarak responsive web siteleri yapmaktayım. Bu süre zarfında, <span className="font-bold">sass ve tailwind(css) ve react.js</span> gibi teknolojileri de öğrendim. Sonuç olarak, yeni teknolojiler öğrenerek kendini sürekli geliştiren ve araştırmayı seven bir yapıya sahibim.
          </p>
        </section>
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-zinc-950">Teknolojiler</h1>

          {technologies.length === 0 ? (
            <p className="text-center text-lg text-gray-600">Yükleniyor...</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <li key={tech.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
                  <img src={tech.imageUrl} alt={tech.title} className="w-16 h-16 object-contain mb-2" />
                  <span className="text-lg font-bold text-gray-700 capitalize">{tech.title}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
       
      </main>
    </>
  )
}

export default About