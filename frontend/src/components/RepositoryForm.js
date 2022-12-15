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
			<div className='create-header'>
				<h1>Create a new repository</h1>
				<p>A repository contains all project pages</p>
			</div>
			<form className='repository-form-container'>
				<label>Repository name *</label>
				<p className='repo-sub'>Great titles are short and memorable</p>
				<input className='repo-name-input-title' type='text'/>
				<label>Synopsis</label>
				<p className='repo-sub'>Write a brief synopsis here</p>
				<input className='repo-name-input-synopsis' type='text'/>
				<label>Genre</label>
				<p className='repo-sub'>Name of genre</p>
				<input className='repo-name-input-genre' type='text'/>
				<label>Form</label>
				<p className='repo-sub'>Name of form</p>
				<input className='repo-name-input-form' type='text'/>
				<button>create</button>
			</form>	
		</>
	)
};

export default RepositoryForm;
