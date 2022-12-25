import { useState } from 'react';

// Components
import Nav from "../components/Nav";
import SigninForm from "../components/SigninForm";
import Copyright from '../components/Copyright';

function Signin(props) {
	return (
			<>
				<Nav/>
				<SigninForm
					button = 'sign in'
					src='./parchment.png'
					sign='Sign in to LitHub'
				/>					
				<Copyright />
			</>
	)
};
  
export default Signin;
