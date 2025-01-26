import {
    FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin, FaGithub, FaMedium,
    FaStackOverflow, FaBehance
} from "react-icons/fa";

const Footer = () => {
    
    const socials = [
        {
            id: 1,
            title: "Facebook",
            url: "https://www.facebook.com/m.ates.ozates/",
            icon: <FaFacebook />
        },
        {
            id: 2,
            title: "Instagram",
            url: "https://www.instagram.com/mehmet.ates.ozates",
            icon: <FaInstagram />
        },
        {
            id: 3,
            title: "Tiktok",
            url: "https://www.tiktok.com/@mhmt_ates_ozates",
            icon: <FaTiktok />
        },
        {
            id: 4,
            title: "Telegram",
            url: "https://www.x.com/MehmetAtes34",
            icon: <FaTelegram />
        },
        {
            id: 5,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/mehmet-ateş-özateş-bb8108110",
            icon: <FaLinkedin />
        },

        {
            id: 6,
            title: "Github",
            url: "www.github.com/mhmtates",
            icon: <FaGithub />,
        },

        {
            id: 7,
            title: "Medium",
            url: "hthttps:tps://medium.com/@ozatesatess",
            icon: <FaMedium />,

        },
        {
            id: 8,
            title: "Stackoverflow",
            url: "https://stackoverflow.com/users/17928850/mehmetates",
            icon: <FaStackOverflow />
        },
        {
            id: 9,
            title: "Behance",
            url: "https://www.behance.net/mehmetatezate",
            icon: <FaBehance />,
        }
    ];

    return (
        <>
            <footer className="mt-12 flex flex-col" >

                <p className="text-4xl mb-12 text-center font-medium"> Aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsiniz 

                </p>

                <ul className="flex gap-2 justify-center">

                    {socials.length !== 0 ? (

                        socials.map((social) => (

                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`follow me on ${social.title}`}
                                className="text-4xl font-bold hover:text-blue-700"
                            >
                                {social.icon}
                            </a>

                        ))

                    ) : (
                        <div></div>
                    )}

                </ul>

            </footer >
        </>
    )
}

export default Footer