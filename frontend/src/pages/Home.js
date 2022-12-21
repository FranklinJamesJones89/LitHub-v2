import Nav from "../components/Nav";
import Main from "../components/Main";
import Feature from '../components/Features';
import Hero from '../components/Hero';

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
						
						<Feature 
							header='Get started with LitHub'
							title1='Share'
							title2='Read'
							title3='Edit'
						/>
						
						<Hero
							src='./screenshot2.jpg'
							src2='./study.jpg'
							src3='./key.png'
							heading='Give your writing a home'
							heading2='Help your fellow writers by proof reading and collaborations'
							heading3='Alright then, keep your secrets'
							paragraph='Tired of staring at unread manuscripts? Create a new repository to host, update, maintain, and share your stories.'
							paragraph2='By proof reading and collaborating on public repositories you and your fellow writers can help each other grow.'
							paragraph3='Feeling shy? Humble? Or do you just want to keep the next great American novel under wraps? Keep your brilliant ideas under lock and key by setting your repositories to private              .'
						/>						
        
			</div>
    )
};

export default Home;
