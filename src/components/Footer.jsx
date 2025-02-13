import {
    FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMedium,
    FaStackOverflow, FaBehance
} from "react-icons/fa";

const Footer = () => {

    const socials = [
        { id: 1, title: "Facebook", url: "https://www.facebook.com/m.ates.ozates/", icon: <FaFacebook /> },
        { id: 2, title: "Instagram", url: "https://www.instagram.com/mehmet.ates.ozates", icon: <FaInstagram /> },
        { id: 3, title: "LinkedIn", url: "https://www.linkedin.com/in/mehmet-ateş-özateş-bb8108110", icon: <FaLinkedin /> },
        { id: 4, title: "Github", url: "https://www.github.com/mhmtates", icon: <FaGithub /> },
        { id: 5, title: "Medium", url: "https://medium.com/@ozatesatess", icon: <FaMedium /> },
        { id: 6, title: "Stackoverflow", url: "https://stackoverflow.com/users/17928850/mehmetates", icon: <FaStackOverflow /> },
        { id: 7, title: "Behance", url: "https://www.behance.net/mehmetatezate", icon: <FaBehance /> }
    ];

    return (
        <footer className="mt-16 flex flex-col items-center bg-gray-900 text-white py-12">
            <p className="text-2xl md:text-3xl mb-6 font-semibold text-center">
                 Beni takip edin 
            </p>

            <ul className="flex flex-wrap gap-6 justify-center">
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow me on ${social.title}`}
                        className="text-4xl transition-transform duration-300 hover:scale-110 hover:text-blue-400"
                    >
                        {social.icon}
                    </a>
                ))}
            </ul>
            <p className="mt-16 text-xl font-bold">Mehmet Ateş Özateş | Tüm Hakları Saklıdır &copy; 2025</p>
        </footer>
    );
};

export default Footer;
