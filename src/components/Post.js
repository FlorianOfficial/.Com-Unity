import React from 'react';

function Post({ content, author }) {
    return (
        <div>
            <p>{content}</p>
            <span>Posted by: {author}</span>
        </div>
    );
}

export default Post;
