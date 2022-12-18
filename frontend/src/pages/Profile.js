import { useEffect, useState } from 'react';
import { useRepositoriesContext } from '../hooks/useRepositoriesContext'

// Imports
import Nav from "../components/Nav";
import RepositoryDetails from '../components/RepositoryDetails';

const Profile = () => {
	const {repositories, dispatch} = useRepositoriesContext()

	useEffect(() => {
			const fetchRepositories = async () => {
					const response = await fetch('/api/repositories')
					const json = await response.json()

					if (response.ok) {
						dispatch({type: 'SET_REPOSITORIES', payload: json})
					}
			}
			fetchRepositories()
	}, [])

	return (
			<div>
					<Nav 
							overview="Overview"
							repositories="Repositories" 
							create='Create'
					/>
					<h1 className='pinned'>Pinned</h1>
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
