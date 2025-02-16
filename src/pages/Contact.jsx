import { useState } from "react";
import Button from "../components/UI/Button";
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const personalInfo = [
        { id: 1, label: "E-Posta", title: "ozatesatess@gmail.com", icon: <FaEnvelope /> },
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
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // 3 saniye sonra bildirimi kaldır

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

  
    return (
        <main className="container mx-auto px-4 py-12 ">
            <section className="bg-teal-500">
                <h1 className="text-4xl text-center font-bold mb-12">Bana Ulaşın</h1>

                {/* Başarı bildirimi */}
                {submitted && (
                    <div className="bg-green-500 text-white text-center py-3 mb-6 rounded-md">
                        {toast.success("Mesajınız başarıyla gönderildi.")}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
                    <label className="flex flex-col gap-1">
                        <span>Ad-Soyad</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
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
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
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
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>Mesaj Konusu</span>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span>Mesaj</span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </label>
                    <Button
                        type="submit"
                        className="p-2 rounded-md text-white transition mt-8 bg-blue-500" 
                    >
                        Gönder
                    </Button>
                </form>
            </section>

            {/* İletişim Bilgileri */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-cyan-700 text-white text-center p-12 mt-16 rounded-lg">
                {personalInfo.map((info) => (
                    <div key={info.id} className="flex flex-col items-center gap-4">
                        <span className="text-4xl">{info.icon}</span>
                        <span className="font-bold text-xl">{info.label}</span>
                        <span className="text-lg">{info.title}</span>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Contact;
