import { useState } from 'react';

const RepositoryForm = () => {
	const [title, setTitle] = useState('');
	const [synopsis, setSynopsis] = useState('');
	const [genre, setGenre] = useState('');
	const [form, setForm] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const repository = {title, synopsis, genre, form};

		const response = await fetch('/api/repositories', {
			method: 'POST',
			body: JSON.stringify(repository);
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json();
	}
	
	return (
		<form>
			<h1>New</h1>
			
			<label>Title</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<input
				type="text"
				onChange={(e) => setSynopsis(e.target.value)}
				value={synopsis}
			/>
			<input
				type="text"
				onChange={(e) => setGenre(e.target.value)}
				value={genre}
			/>
			<input
				type="text"
				onChange={(e) => setForm(e.target.value)}
				value={form}
			/>
		</form>
		
	)

};
