import { useState } from "react";
import Button from "../components/UI/Button";
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";




const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const personalInfo = [
        { id: 1, label: "EPosta", title: "ozatesatess@gmail.com", icon: <FaEnvelope /> },
        { id: 2, label: "Telefon", title: "0538 945 73 86", icon: <FaPhone /> },
        { id: 3, label: "Adres", title: "Beşiktaş/İstanbul", icon: <FaAddressCard /> },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Teşekkürler, ${formData.name}! Mesajın alındı.`);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main>
            <section className="container mx-auto">
                <h1 className="text-4xl text-center font-bold mt-12">Bana Ulaşın</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 font-bold">
                    <label className="flex flex-col gap-1">
                        <span>Ad-Soyad</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>E-Posta</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>Telefon</span>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>Mesaj Konusu</span>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>Mesaj</span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md"
                            required
                        ></textarea>
                    </label>
                    <Button type="submit" className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition mt-8">
                        Gönder
                    </Button>
                </form>

            </section>
            <section className="flex  my-40 bg-cyan-700 w-full p-24 justify-between text-2xl ">
                {personalInfo.map((info) => (
                    <div key={info.id} className="flex flex-col gap-4 items-center">
                        <span className="text-4xl">{info.icon}</span>
                        <span className="font-bold">{info.label}</span>
                        <span>{info.title}</span>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Contact;
