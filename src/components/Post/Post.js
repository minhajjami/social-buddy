import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const{title,body,id}=props.post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>See More</Link>
        </div>
    );
};

export default Post;