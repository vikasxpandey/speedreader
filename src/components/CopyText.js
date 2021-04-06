import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import corpus from '../corpus'

const useStyles = makeStyles((theme) => ({
	textarea: {
		width: '100%',
		height: '50vh'
	},
	wrap: {
		padding: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	actions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		display: 'flex'
	},
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	bottom: {
		marginTop: theme.spacing(5)
	}
}))

const CopyText = ({ text, setText, show, setShow }) => {
	const classes = useStyles()

	return (
		<div className={classes.wrap}>
			<textarea
				className={classes.textarea}
				value={text}
				onChange={(e) => setText(e.target.value)}
			></textarea>
			<div className={classes.actions}>
				<Button
					className={classes.button}
					variant='outlined'
					onClick={() => setText('')}
				>
					CLEAR
				</Button>
				<Button
					className={classes.button}
					variant='outlined'
					onClick={() => setText(corpus)}
				>
					LOAD SAMPLE
				</Button>
			</div>
			<div className={classes.bottom}>
				<Fab
					disabled={!text.length}
					color='secondary'
					size='large'
					onClick={() => setShow(!show)}
				>
					<h5>START</h5>
				</Fab>
			</div>
		</div>
	)
}

export default CopyText
