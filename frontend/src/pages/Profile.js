import { useEffect, useState } from 'react';

// components
import Nav from "../components/Nav";
import RepositoryDetails from '../components/RepositoryDetails';

const Profile = () => {
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch('/api/repositories')
            const json = await response.json()

            if (response.ok) {
                setRepositories(json);
                console.log(json);
            }
        }

        fetchRepositories()
    }, [])

    return (
        <div>
            <Nav 
                overview="Overview"
                repositories="Repositories" 
            />
            <div>
                {repositories && repositories.map((repository) => (
                    <RepositoryDetails 
                        key={repository._id} 
                        repository={repository}
                    />
                ))}
            </div>
        </div>
    )
};

export default Profile;