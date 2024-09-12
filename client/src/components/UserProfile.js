import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => setUser(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.careerGuidance}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;
