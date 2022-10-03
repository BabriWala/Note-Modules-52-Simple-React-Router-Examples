import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
            <p><small>UserName: <Link to={`/friend/${friend.id}`}>{friend.username}</Link></small></p>
        </div>
    );
};

export default Friend;