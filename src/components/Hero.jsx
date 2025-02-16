import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import Button from "../components/UI/Button";
import profilePhoto from "../assets/profilePhoto.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/src/assets/Resume.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="container sm:mx-auto sm:my-auto h-screen font-extrabold flex items-center justify-center">
      <section className="flex flex-col lg:flex-row items-center gap-12">
       
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl text-yellow-500 mb-4">Merhaba</h1>
          <h2 className="text-4xl text-red-500 mb-6">Ben Mehmet Ateş Özateş</h2>

          <p className="text-3xl text-blue-800 mb-6">
            <TypeWriter
              options={{
                strings: ["Fullstack Web Developer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <p className="font-medium text-lg text-gray-700 mb-6">
            Yazılım alanında 3 yıllık tecrübeye sahip bir freelance geliştiriciyim. Araştırmayı seven, kendini
            geliştirmeye ve yeni teknolojileri öğrenmeye istekli, algoritmik düşünce yapısı sayesinde karmaşık
            problemleri çözebilen biriyim.
          </p>

      
          <div className="flex items-center justify-center lg:justify-start gap-6">
            <Button className="hover:bg-amber-600" onClick={handleDownloadCV}>
              CV İndir
            </Button>
            <Button className="hover:bg-amber-600">
              İletişim
            </Button>
          </div>
        </motion.div>

       
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={profilePhoto}
          alt="Profile Photo"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-xl mx-auto my-auto"
        />
      </section>
    </main>
  );
};

export default Hero;
