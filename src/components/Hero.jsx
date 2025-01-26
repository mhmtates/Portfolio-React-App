import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import Button from "../components/UI/Button";
import profilePhoto from "../assets/profilePhoto.jpg";

const Hero = () => {
  return (
    <main className="container h-screen font-extrabold mt-28">
      <section className="flex">
        <div>
          {/* Animasyonlu Başlık ve Açıklamalar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-3xl text-amber-600 mb-4">Merhaba</h1>
            <h2 className="text-4xl text-gray-400 mb-8">Ben Mehmet Ateş Özateş</h2>

            <p className="text-2xl text-zinc-800 mb-12">
              <TypeWriter
                options={{
                  strings: ["Fullstack Web Developer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="ml-24 font-medium text-xl text-justify mb-8">
              Yazılım alanında 3 yıllık tecrübeye sahip bir freelance geliştiriciyim. Araştırmayı seven, kendini
              geliştirmeye ve yeni teknolojileri öğrenmeye istekli, algoritmik düşünce yapısı sayesinde karmaşık
              problemleri çözebilen biriyim.
            </p>
          </motion.div>

          {/* Butonlar */}
          <div className="flex items-center justify-center gap-8 font-bold">
            <Button className="hover:bg-amber-600">Özgeçmiş</Button>
            <Button className="hover:bg-amber-600">İletişim</Button>
          </div>
        </div>

        {/* Profil Fotoğrafı */}
        <img
          src={profilePhoto}
          alt="Profile Photo"
          className="ml-36 mt-8 w-[300px] h-[300px] object-cover rounded-full"
        />
      </section>
    </main>
  );
};

export default Hero;
