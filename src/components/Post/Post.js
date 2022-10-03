import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/post/${post.id}`);
    }
    return (
        <div className='post'>
            <h3>Post Title: {post.title}</h3>
            <p>Post Details: {post.body}</p>
            <button><Link to={`/post/${post.id}`}>More Details</Link></button>
            <button onClick={handleNavigate}>More Details2</button>
        </div>
    );
};

export default Post;