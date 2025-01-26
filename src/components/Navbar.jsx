
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full p-4 justify-between">
            <div className="text-white text-lg">
                MAÖ
            </div>
            <ul className="flex gap-4 text-black text-xl font-bold">
               <li><Link to="/">Anasayfa</Link></li>
               <li><Link to="/hakkimda"> Hakkımda</Link></li>
               <li><Link to="/projects"> Projeler</Link></li>
               <li><Link to="/contact" > İletişim</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar