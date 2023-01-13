import { useState } from 'react';
import { useRepositoriesContext } from '../hooks/useRepositoriesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import Nav from './Nav'

const RepositoryForm = (props) => {
	// useState hooks destructuring
	const { dispatch } = useRepositoriesContext();
	const { user } = useAuthContext();	

	const [title, setTitle] = useState('');
	const [synopsis, setSynopsis] = useState('');
	const [genre, setGenre] = useState('');
	const [form, setForm] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	
	// Handle submit function
	const handleSubmit = async(e) => {
		e.preventDefault()

		if (!user) {
			setError('You must be logged in')
			return
		}

		const repository = {title, synopsis, genre, form}

		const response = await fetch('/api/repositories', {
			method: 'POST',
			body: JSON.stringify(repository),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.token}`
			}
		})
		
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setEmptyFields(json.emptyFields)
		}

		if (response.ok) {
			setTitle('')
			setSynopsis('')
			setGenre('')
			setForm('')
			setError(null)
			setEmptyFields([])
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
					id='repo-name-input-title'
					type='text'onChange={(e) => setTitle(e.target.value)}
					value={title}
					className={emptyFields.includes('title') ? 'error' : ''}
				/>
				
				<label>Synopsis</label>
				<p className='repo-sub'>Write a brief synopsis here</p>
				<input 
					id='repo-name-input-synopsis' 
					type='text'
					onChange={(e) => setSynopsis(e.target.value)}
					value={synopsis}
					className={emptyFields.includes('synopsis') ? 'error' : ''}
				/>	
				<label>Genre</label>
				<p className='repo-sub'>Name of genre</p>
				<input 
					id='repo-name-input-genre' 
					type='text'
					onChange={(e) => setGenre(e.target.value)}
					value={genre}
					className={emptyFields.includes('genre') ? 'error' : ''}
				/>
				<label>Form</label>
				<p className='repo-sub'>Name of form</p>
				<input 
					id='repo-name-input-form' 
					type='text'
					onChange={(e) => setForm(e.target.value)}
					value={form}
					className={emptyFields.includes('form') ? 'error' : ''}
				/>
				<button className='repo-create-button'>create</button>
				{error && <div className='error'>{error}</div>}
			</form>	
		</>
	)
};

export default RepositoryForm;
