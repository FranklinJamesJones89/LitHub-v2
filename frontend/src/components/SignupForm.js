import { useState } from 'react'
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {signup, error, isLoading} = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(username, email, password)
		
	}
	
	return (
		<div className="signup-container">
			<img className='signin-img' src={props.src} alt="Lithub logo"/>
			<h1>{props.sign}</h1>
			<form className="signup-form" onSubmit={handleSubmit}>
				<input 
					type="username" 
					placeholder="Username"
					onChange={(e) => setUserName(e.target.value)}
					value={username}
					/>
				<input 
					type="email" 
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					/>
				<input 
					type="password" 
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button disabled={isLoading}className="signup-btn"type="submit">{props.button}</button>
				{error && <div className='test-error'>{error}</div>}
			</form>
		  <Link to='/signin' className="signup-notice">{props.formNotice}</Link>
		</div>
	)
};

export default SignupForm;
