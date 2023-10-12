import React, { useState } from 'react';

function Chat() {
    const [message, setMessage] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => console.log("Send message logic here")}>Send</button>
        </div>
    );
}

export default Chat;
