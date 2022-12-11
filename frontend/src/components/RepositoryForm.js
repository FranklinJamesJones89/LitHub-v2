import { useState } from 'react';
import Nav from './Nav'

const RepositoryForm = (props) => {
	const [title, setTitle] = useState('');
	const [synopsis, setSynopsis] = useState('');
	const [genre, setGenre] = useState('');
	const [form, setForm] = useState('');

	return (
		<>
			<Nav 
				overview="Overview"
			/>
			<div className="signup-container">
          <form className="form">
						<h1>Create a New Repository</h1>
						<p>A repository contains all project pages</p>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button className="signup-btn"type="submit">{props.button}</button>
            <p className="signup-notice">Already have an account? Sign in</p>
          </form>
       </div>
		</>
	)
};

export default RepositoryForm;
