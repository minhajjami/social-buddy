import React  from 'react';

const Comment = (props) => {
    const { name, email, body } = props.comment;

    return (
        <div>
            <h2>Name:{name}</h2>
            <h5>Email:{email}</h5>
            <p>Comment:{body}</p>
        </div>
    );
};

export default Comment;