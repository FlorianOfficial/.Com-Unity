import React from 'react';

function UserProfile({ username, bio }) {
    return (
        <div>
            <h2>{username}</h2>
            <p>{bio}</p>
        </div>
    );
}

export default UserProfile;
