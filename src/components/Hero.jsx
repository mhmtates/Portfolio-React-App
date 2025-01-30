import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import Button from "../components/UI/Button";
import profilePhoto from "../assets/profilePhoto.jpg";

const Hero = () => {
  return (
    <main className="container h-screen font-extrabold mt-28">
      <section className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 100 }}
            transition={{ duration: 1 }}
            className="text-left md:text-center"
          >
            <h1 className="text-3xl text-amber-600 mb-4">Merhaba</h1>
            <h2 className="text-4xl text-gray-400 mb-8">Ben Mehmet Ateş Özateş</h2>

            <p className="text-3xl text-zinc-800 mb-12">
              <TypeWriter
                options={{
                  strings: ["Fullstack Web Developer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="mx-4 lg:ml-8 font-medium text-xl sm:text-left md:text-justify   mb-8">
              Yazılım alanında 3 yıllık tecrübeye sahip bir freelance geliştiriciyim. Araştırmayı seven, kendini
              geliştirmeye ve yeni teknolojileri öğrenmeye istekli, algoritmik düşünce yapısı sayesinde karmaşık
              problemleri çözebilen biriyim.
            </p>
          
        
          <div className="flex items-center justify-start lg:justify-center gap-8 ">
            <Button className="hover:bg-amber-600">CV İndir</Button>
            <Button className="hover:bg-amber-600">İletişim </Button>
          </div>
          </motion.div>

        </div>

       
        <img
          src={profilePhoto}
          alt="Profile Photo"
          className="mt-8 lg:mt-0 lg:ml-96 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
        />
      </section>
    </main>
  );
};

export default Hero;