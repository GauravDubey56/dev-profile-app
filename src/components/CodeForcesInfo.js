import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'


function CodeForcesInfo(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h3" component="h3">
                   Info
                </Typography>
                <Typography variant="h5" component="div">
                    {props.handle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Max Rating : {props.currentRating} { props.class}
                </Typography>
                <Typography variant="body2">
                    Participating since : {props.joinDate}
                </Typography>
                <Typography variant="body2">
                    Problems Solved : {props.problemsCount}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Complete Profile</Button>
            </CardActions>
        </Card>
    );
}
export default CodeForcesInfo
