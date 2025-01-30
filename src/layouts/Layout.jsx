import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout