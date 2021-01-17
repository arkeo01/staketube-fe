import React, { useState, useEffect } from 'react';
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

	// const [fileInput, setFileInput] = useState('');
	const [title, setTitle] = useState('');
	const [filePath, setFilePath] = useState('');
	const [description, setDescription] = useState({});

	// TODO: Can we optimize performance by not reading everytime the input change but when just when user submits/finishes writing
	// For the above something like formik will have to be implemented.
	const onTitleChange = (e) => {
		console.log(e.target.value);
		setTitle(e.target.value);
	}
	
	const onDescriptionChange = (e) => {
		console.log(e.target.value);
		setDescription(e.target.value);
	}

	const onFilePathChange = (e) => {
		console.log(e.target.files[0]);
		setFilePath(e.target.files[0]);
	}

	// Picking up video and displaying it by passing it's content in the url attribute of video tag
	// const onChangeFileInput = (e) => {
	// 	console.log('Video selected: ', e.target.files);
	// 	const filePath = e.target.files[0];
	// 	const fileReader = new FileReader();
	// 	fileReader.readAsDataURL(filePath);

	// 	fileReader.onload = (e) => {
	// 		console.log(e.target.result);
	// 		setFileInput(e.target.result);
	// 	}
	// }

	const onFileUpload = () => {
		let headers = new Headers();
		headers.append('Accept', 'application/json');

		let formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('video', filePath);

		const req = new Request('http://localhost:3001/fileUpload', {
			method: 'POST',
			headers,
			mode: 'no-cors',
			body: formData
		});

		fetch(req)
			.then(res => res.json())
			.catch(err => console.log('Oh Snap!', err));
	}

  return (
	  <Container className={classes.container}>
			<form noValidate autoComplete="off" >
				<Paper variant="outlined" className={classes.paper} >
					<Grid container spacing={4} direction="column" alignContent="center">
						<Typography variant="h3" gutterBottom >
							Upload Video
						</Typography>
						<TextField 
							required 
							className={classes.textField} 
							id="title" 
							label="Title"
							variant="outlined"
							onChange={e => onTitleChange(e)}
						/>
						<TextField 
							multiline 
							className={classes.textField} 
							id="description" 
							label="Description" 
							rows={4} 
							variant="outlined" 
							onChange={e => onDescriptionChange(e)}
						/>
						{/* TODO: Display File Name after selecting. Name At: e.target.files[0].name*/}
						<Button 
							className={classes.uploadButton}
							variant="contained" component="label"
							onChange={e => onFilePathChange(e)}
							id="video"
						>
							Upload File
							<input type="file" id="video" hidden />
						</Button>
						<Button
							onClick={onFileUpload}
							variant="contained" 
							color="primary" 
							size="large" 
						>
							Submit
						</Button>
					</Grid>
				</Paper>
			</form>
			{/* {
				fileInput 
				&&
				<video id="fileInputVideo" controls src={fileInput} ></video>
			} */}
		</Container>
  );
}

export default VideoUploadForm