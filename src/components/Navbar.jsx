import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Menü açıkken dışarı tıklanınca kapatma
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest("nav")) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [menuOpen]);

    return (
        <nav className="container flex items-center justify-between p-4 mx-auto relative">
            <div className="text-zinc-950 text-xl font-bold">Mehmet Ateş Özateş</div>

            {/* Mobil Menü Butonu */}
            <button
                className="block lg:hidden px-2 py-1 border rounded text-zinc-950 border-zinc-950"
                onClick={toggleMenu}
            >
                {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>

            {/* Menü */}
            <ul
                className={`absolute top-16 left-0 w-full shadow-lg lg:static lg:shadow-none lg:w-auto lg:flex-row lg:flex gap-8 text-zinc-950 text-xl font-bold
                ${menuOpen ? "flex flex-col items-center py-4" : "hidden lg:flex"}`}
            >
                <li><Link to="/" className="block px-4 py-2 hover:text-blue-600">Anasayfa</Link></li>
                <li><Link to="/hakkimda" className="block px-4 py-2 hover:text-blue-600">Hakkımda</Link></li>
                <li><Link to="/projeler" className="block px-4 py-2 hover:text-blue-600">Projeler</Link></li>
                <li><Link to="/iletisim" className="block px-4 py-2 hover:text-blue-600">İletişim</Link></li>
            </ul>

            {/* Menü Açıkken Arka Plan Bulanıklığı */}
            {menuOpen && <div className="fixed inset-0 bg-black opacity-30 lg:hidden" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default Navbar;
