import { useState } from 'react';
import { useRepositoriesContext } from '../hooks/useRepositoriesContext'
import Nav from './Nav'

const RepositoryForm = (props) => {
	// useState hooks destructuring
	const { dispatch } = useRepositoriesContext()
	const [title, setTitle] = useState('');
	const [synopsis, setSynopsis] = useState('');
	const [genre, setGenre] = useState('');
	const [form, setForm] = useState('');
	const [error, setError] = useState(null);
	
	// Handle submit function
	const handleSubmit = async(e) => {
		e.preventDefault()

		const repository = {title, synopsis, genre, form}

		const response = await fetch('/api/repositories', {
			method: 'POST',
			body: JSON.stringify(repository),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
		}

		if (response.ok) {
			setTitle('')
			setSynopsis('')
			setGenre('')
			setForm('')
			setError(null)
			console.log('New repository added')
			dispatch({type: 'CREATE_REPOSITORY', payload: json})
		}
	};

	return (
		<>
			<Nav 
				overview="Overview"
			/>
			
			<div className='create-header'>
				<h1>Create a new repository</h1>
				<p>A repository contains all project pages</p>
			</div>
			
			<form className='repository-form-container' onSubmit={handleSubmit}>
				<label>Repository name *</label>
				<p className='repo-sub'>Great titles are short and memorable</p>
				<input 
					className='repo-name-input-title' 
					type='text'onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				
				<label>Synopsis</label>
				<p className='repo-sub'>Write a brief synopsis here</p>
				<input 
					className='repo-name-input-synopsis' 
					type='text'
					onChange={(e) => setSynopsis(e.target.value)}
					value={synopsis}
				/>	
				<label>Genre</label>
				<p className='repo-sub'>Name of genre</p>
				<input 
					className='repo-name-input-genre' 
					type='text'
					onChange={(e) => setGenre(e.target.value)}
					value={genre}
				/>
				<label>Form</label>
				<p className='repo-sub'>Name of form</p>
				<input 
					className='repo-name-input-form' 
					type='text'
					onChange={(e) => setForm(e.target.value)}
					value={form}
				/>
				<button className='repo-create-button'>create</button>
				{error && <div className='error'>{error}</div>}
			</form>	
		</>
	)
};

export default RepositoryForm;
