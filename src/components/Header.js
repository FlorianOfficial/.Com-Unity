import React from 'react';

function Header() {
    return (
        <header>
            <img src="logo.png" alt=".Com-Unity Logo" />
            <nav>
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/messages">Messages</a>
            </nav>
        </header>
    );
}

export default Header;
