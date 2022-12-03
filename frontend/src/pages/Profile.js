import { useEffect, useState } from 'react';
import Nav from "../components/Nav";

const Profile = () => {
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch('/api/repositories')
            const json = await response.json();

            if (response.ok) {
                setRepositories(json);
            }
        }

        fetchRepositories()
    }, [])

    return (
        <div>
            <Nav />
            <div className='repositories'>
                {repositories && repositories.map((repository) => (
                    <p key={repository._id}>{repository.title}</p>
                ))}
            </div>
        </div>
    )
};

export default Profile;