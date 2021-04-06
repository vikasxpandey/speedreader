import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2)
	},
	input: {
		display: 'none'
	}
}))

const UploadPDF = () => {
	const classes = useStyles()

	const test = (e) => {
		console.log(e.target.files[0])
	}

	return (
		<div>
			<input
				accept='image/*'
				className={classes.input}
				id='upload-file'
				type='file'
				onChange={test}
			/>
			<label htmlFor='upload-file'>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					startIcon={<CloudUploadIcon />}
					component='span'
				>
					UPLOAD
				</Button>
			</label>
		</div>
	)
}

export default UploadPDF
