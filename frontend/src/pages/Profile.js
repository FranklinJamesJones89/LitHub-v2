import { useEffect, useState } from 'react';
import Nav from "../components/Nav";

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
            <Nav />
            <div>
                {repositories && repositories.map((repository) => (
                    <img className="avatar" key={repository._id} src={repository.avatar} alt=""/>
                ))}
            </div>
        </div>
    )
};

export default Profile;