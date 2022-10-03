import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    // console.log(post);
    return (
        <div>
            <h2>This is Post Details Page</h2>
            <h1>Post Title: {post.title}</h1>
            <p>Post Body: {post.body}</p>
            <button><Link to={`/friend/${post.userId}`}>See The Author</Link></button>
        </div>
    );
};

export default PostDetails;