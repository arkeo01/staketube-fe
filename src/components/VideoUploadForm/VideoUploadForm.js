import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		alignContent: 'center'
	},
	textField: {
		margin: theme.spacing(1),
		width: '50ch',
	},
	uploadButton: {
    	margin: theme.spacing(1),
		width: '20ch'
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(3),
	},
}));

const VideoUploadForm = () => {
  const classes = useStyles();

  return (
	  <Container className={classes.container}>
			<form noValidate autoComplete="off" >
				<Paper variant="outlined" className={classes.paper} >
					<Grid container spacing={4} direction="column" alignContent="center">
						<Typography variant="h3" gutterBottom >
							Upload Video
						</Typography>
						<TextField required className={classes.textField} id="title" label="Title" variant="outlined" />
						<TextField multiline className={classes.textField} id="description" label="Description" rows={4} variant="outlined"  />
						{/* TODO: Display File Name after selecting */}
						<Button className={classes.uploadButton} variant="contained" component="label" >
								Upload File
								<input type="file" hidden />
						</Button>
						<Button variant="contained" color="primary" size="large" >
							Submit
						</Button>
					</Grid>
				</Paper>
			</form>
		</Container>
  );
}

export default VideoUploadForm