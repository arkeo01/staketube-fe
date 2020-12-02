import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'block'
	},
	textField: {
    margin: theme.spacing(1),
    width: '50ch',
	},
	uploadButton: {
    margin: theme.spacing(1),
		// width: '20ch'
	},
}));

const VideoUploadForm = () => {
  const classes = useStyles();

  return (
		<form noValidate autoComplete="off">
			<Paper variant="outlined" >
      <TextField required className={classes.textField} id="title" label="Title" variant="outlined" />
      <TextField multiline className={classes.textField} id="description" label="Description" rows={4} variant="outlined" />
			{/* File Name not displayed after selecting */}
			<Button className={classes.uploadButton} variant="contained" component="label">
					Upload File
					<input type="file" hidden />
			</Button>
			<Button variant="contained" color="primary">
				Submit
			</Button>
		</Paper>
    </form>
  );
}

export default VideoUploadForm