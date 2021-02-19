import { useSelector } from 'react-redux';
import { SignInScreen } from '..';
import { Accordion, Footer, Header, Nav, Story } from '../../Components';
import { selectLogin } from '../../features/loginSlice';
import "./styles/LoginScreen.css";

const LoginScreen = () => {
    const login = useSelector(selectLogin);
    
    return (
        <>
            <div className="login">
                <div className="login__bg">
                    <Nav />
                </div>

                <div className="login__body">
                    {login ? (
                        <SignInScreen />
                    ) : (
                        <Header />
                        )}
                </div>
            </div>
            <Story />
            <Accordion />
            <Footer />
        </>
    )
};

export default LoginScreen;
