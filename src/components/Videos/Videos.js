import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import VideoCard from './VideoCard';

const Videos = () =>{
    return (
        <Grid container>
            <Grid item sm={2} />
            <Grid item container spacing={3} xs={12} sm={8} >
                {/* TODO: Use media query for centering videocards in xs display */}
                <Grid item xs={12} sm={4} >
                    <VideoCard />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <VideoCard />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <VideoCard />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <VideoCard />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <VideoCard />
                </Grid>
            </Grid>
            <Grid item sm={2} />
        </Grid>
    );
}

export default Videos;