import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="container flex flex-wrap items-center justify-between p-4 mx-auto">
            <div className="text-zinc-950 text-xl font-bold">
                Mehmet Ateş Özateş
            </div>
            <button
                className="block lg:hidden px-2 py-1 border rounded text-zinc-950 border-zinc-950"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
          </button>
            <ul className={`flex-col lg:flex-row lg:flex gap-8 text-zinc-950 text-xl font-bold ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/hakkimda">Hakkımda</Link></li>
                <li><Link to="/projects">Projeler</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
                <li className="relative">
                    <button onClick={toggleDropdown} className="focus:outline-none">
                        More
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                            <li><Link to="/option1" className="block px-4 py-2">Option 1</Link></li>
                            <li><Link to="/option2" className="block px-4 py-2">Option 2</Link></li>
                            <li><Link to="/option3" className="block px-4 py-2">Option 3</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;