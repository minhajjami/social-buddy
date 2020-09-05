import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

const Comment = (props) => {
    const classes = useStyles();
    const { name, email, body } = props.comment;

    const [userImage, setUserImage] = useState({});

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(res => res.json())
            .then(data => setUserImage(data.results[0].picture))
    }, [])

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar src={userImage.large}></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" component="h5">{name} </Typography>
                        <Typography variant="h5" component="h5">{email} </Typography>
                        <Typography  color="textSecondary">{body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comment;