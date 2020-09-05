import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { Box, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PostDetail = () => {

    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <Box mt={8} mb={3} ml={25} mr={25}>
                <Card >
                    <CardContent>
                        <Typography variant="h4" component="h2" color="textPrimary" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="body2" component="p" color="textSecondary">
                            {post.body}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;