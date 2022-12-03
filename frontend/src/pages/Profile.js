import { useEffect, useState } from 'react';
import Nav from "../components/Nav";

const Profile = () => {

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch('http://localhost:3000/api/repositories')
        }
    }, [])

    return (
        <div>
            <Nav />
            <div>
                <h1>Home</h1>
            </div>
        </div>
    )
};

export default Profile;