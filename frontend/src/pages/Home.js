import Nav from "../components/Nav";
import Main from "../components/Main";

const Home = () => {
    return (
        <div className="home">
            <Nav
                profile="Profile" 
                signup ="Sign up"
                signin="Sign in"
                about="About"
            />
            <Main />
        </div>
    )
};

export default Home;