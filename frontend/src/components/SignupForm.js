import { useState } from 'react'
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		console.log(username, email, password);
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
				<button className="signup-btn"type="submit">{props.button}</button>
			</form>
		   <Link to='/signin' className="signup-notice">{props.formNotice}</Link>
		</div>
	)
};

export default SignupForm;
