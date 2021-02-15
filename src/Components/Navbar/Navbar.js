import { useEffect, useState } from 'react';
import "./styles/Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
    
    const transitionNavbar = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__container">
                <img className="navbar__logo" src="/images/logo.svg" alt="Netflix Logo" />
                <img className="navbar__avatar" src="/images/users/4.png" alt="User Avatar" />
            </div>
        </div>
    )
};

export default Navbar;
