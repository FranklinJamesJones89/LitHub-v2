import { useEffect, useState } from 'react';
import { useRepositoriesContext } from '../hooks/useRepositoriesContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';

// Imports
import Nav from "../components/Nav"
import RepositoryDetails from '../components/RepositoryDetails'
import Quotes from '../components/Quotes'

const Profile = () => {
	const {repositories, dispatch} = useRepositoriesContext()
	const { user } = useAuthContext()
	const [ isVisible, setIsVisible ] = useState(false);
	
	useEffect(() => {
			const fetchRepositories = async () => {
				const response = await fetch('/api/repositories', {
					headers: {
						'Authorization': `Bearer ${user.token}`
					}
				})
					const json = await response.json();

					if (response.ok) {
						dispatch({type: 'SET_REPOSITORIES', payload: json})
					}
			}
		if (user) {
			fetchRepositories()
		}
	}, [dispatch, user])

	const handleClick = () => {
		console.log('hello');
	}

	return (
		<div>
			{user && (
				<Nav 
						overview="Overview"
						repositories="Repositories" 
						create='Create'
						signout='Sign out'
				/>
			)}
			
			<div className='user-container'>
				<img src="https://www.thefamouspeople.com/profiles/images/david-foster-wallace-2.jpg" className='user-img'/>
				<h1 className='user-username'>{user.username}</h1>
				<p className='user-email'>{user.email}</p>
				<button style={{ display: !isVisible ? 'block' : 'none' }}className='edit-profile-btn' onClick={() => setIsVisible(!isVisible)}>Edit profile</button>
				
				<div style={{ display: isVisible ? 'block' : 'none' }}>
					<form className='user-form-container'>
						<label>Username</label>
						<p className='repo-sub'>Update your avatar</p>
						<input 
							id='repo-name-input-title'
							type='text'
						/>
						<label>Bio</label>
						<p className='repo-sub'>Tell us about yourself</p>
						<input 
							id='repo-name-input-synopsis' 
							type='text'
						/>	
						<label>Update photo</label>
						<p className='repo-sub'>Update your avatar</p>
						<input 
							id='repo-name-input-synopsis' 
							type='text'
						/>	
					</form>
					<button className='user-update-save-btn'><span>save</span></button>	
					<button className='user-update-cancel-btn' onClick={() => setIsVisible(!isVisible)}><span>cancel</span></button>	
				</div>
			</div>
			{repositories && repositories.map((repository) => (
				<RepositoryDetails 
					key={repository._id}
					repository={repository}
				/>
			))}
		</div>
	)
};

export default Profile;
