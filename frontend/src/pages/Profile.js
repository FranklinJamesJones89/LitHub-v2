import { useEffect, useState } from 'react';
import { useRepositoriesContext } from '../hooks/useRepositoriesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

// Imports
import Nav from "../components/Nav";
import RepositoryDetails from '../components/RepositoryDetails';
import Quotes from '../components/Quotes';

const Profile = () => {
	const {repositories, dispatch} = useRepositoriesContext()
	const { user } = useAuthContext()
	
	useEffect(() => {
			const fetchRepositories = async () => {
					const response = await fetch('/api/repositories')
					const json = await response.json()

					if (response.ok) {
						dispatch({type: 'SET_REPOSITORIES', payload: json})
					}
			}
			fetchRepositories()
	}, [dispatch])

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
				<button className='edit-profile-btn'>Edit profile</button>
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
