import { Accordion, Background, Footer, Story } from '../../Components';
import "./styles/LoginScreen.css";

const LoginScreen = () => {
    return (
        <div className="login">
            <Background />
            <Story />
            <Accordion />
            <Footer />
        </div>
    )
};

export default LoginScreen;
