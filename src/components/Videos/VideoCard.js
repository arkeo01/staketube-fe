import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardContent: {
      padding: 0
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* TODO: Make these images responsive */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="An Amazing video of a lizard"
						subheader="Video Creator | Sep 14 2017"
					/>
        </CardContent>
      </CardActionArea>
      
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}