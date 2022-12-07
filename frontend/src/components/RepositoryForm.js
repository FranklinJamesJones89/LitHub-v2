import { useState } from 'react';
import Nav from './Nav'

const RepositoryForm = () => {
	const [title, setTitle] = useState('');
	const [synopsis, setSynopsis] = useState('');
	const [genre, setGenre] = useState('');
	const [form, setForm] = useState('');

	return (
		<form>
			<Nav />
			<button>New</button>						
		</form>
	)
};

export default RepositoryForm;
