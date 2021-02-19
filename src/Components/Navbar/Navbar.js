// **********************************************************************
// **********************************************************************
// *************THIS IS THE NAVBAR LIVING IN THE BROWSE PAGE*************
// **********************************************************************
// **********************************************************************
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./styles/Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const history = useHistory();

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
                <img
                    onClick={() => history.push('/')}
                    className="navbar__logo"
                    src="/images/logo.svg"
                    alt="Netflix Logo"
                />

                <div className="navbar__links">
                    <p>Home</p>
                    <p>Series</p>
                    <p>Movies</p>
                    <p>Popular News</p>
                    <p>My List</p>
                </div>


                <img className="navbar__burgerButton" src="/images/icons/burger.png" alt="responsive button" />
                <div className="navbar__burgerLinks">
                    <p>Home</p>
                    <p>Series</p>
                    <p>Movies</p>
                    <p>Popular News</p>
                    <p>My List</p>
                </div>

                <div className="navbar__icons">
                    <img src="/images/icons/search.png" alt="" className="navbar__icon" />
                    <img src="/images/icons/gift.png" alt="" className="navbar__icon" />
                    <img src="/images/icons/notfication.png" alt="" className="navbar__icon" />
                    <img
                        onClick={() => history.push('/profile')}
                        className="navbar__avatar"
                        src="/images/users/4.png"
                        alt="User Avatar"
                    />
                    {/* <img src="/images/icons/chevron-down.png" alt="" className="navbar__icon" /> */}
                </div>
            </div>
        </div>
    )
};

export default Navbar;
