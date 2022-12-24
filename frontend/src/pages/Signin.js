import { useState } from 'react';

// Components
import Nav from "../components/Nav";
import SignupForm from "../components/SignupForm";
import Copyright from '../components/Copyright';

function Signup(props) {
	return (
			<>
				<Nav/>
				<SignupForm
					button = 'sign in'
					src='./parchment.png'
					sign='Sign in to LitHub'
				/>					
				<Copyright />
			</>
	)
};
  
export default Signup;
