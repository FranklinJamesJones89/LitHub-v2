import Nav from "../components/Nav";
import SignupForm from "../components/SignupForm";
import Copyright from '../components/Copyright';

function Signup(props) {
	return (
			<>
				<Nav/>
				<SignupForm
					sign='Sign up for LitHub'
					button = 'register'
					formNotice='Already have an account? Sign in'
					src='./parchment.png'
				/>					
				<Copyright />
			</>
	)
};
  
export default Signup;
