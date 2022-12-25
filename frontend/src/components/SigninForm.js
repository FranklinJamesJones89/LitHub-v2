import { useState } from 'react'
import { useSignin } from '../hooks/useSignin';
import { Link } from 'react-router-dom';

const SigninForm = (props) => {
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {signin, error, isLoading} = useSignin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signin(username, email, password)
		
	}
	
	return (
		<div className="signup-container">
			<img className='signin-img' src={props.src} alt="Lithub logo"/>
			<h1>{props.sign}</h1>
			<form className="signup-form" onSubmit={handleSubmit}>
				<input 
					type="username" 
					placeholder="username"
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
		</div>
	)
};

export default SigninForm;
