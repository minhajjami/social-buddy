import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    })

    return (
        <div>
            {
                posts.map(post=><Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;