import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Post from './components/Post';
import Chat from './components/Chat';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                {/* Just for demonstration purposes */}
                <UserProfile username="JohnDoe" bio="Blockchain Enthusiast" />
                <Post content="Excited about .Com-Unity! #DecentralizedSocial" author="JohnDoe" />
                <Chat />
            </main>
            <Footer />
        </div>
    );
}

export default App;
