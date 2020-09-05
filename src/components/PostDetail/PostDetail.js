import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {

    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    })

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    })

    return (
        <div>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;