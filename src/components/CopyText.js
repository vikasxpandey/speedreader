import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import corpus from '../corpus'

const useStyles = makeStyles((theme) => ({
	textarea: {
		width: '100%',
		height: '40vh'
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
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}))

const marks = [
	{
		value: 100,
		label: '600'
	},
	{
		value: 140,
		label: '430'
	},
	{
		value: 180,
		label: '330'
	},
	{
		value: 220,
		label: '270'
	}
]

const CopyText = ({ text, setText, show, setShow, speed, setSpeed }) => {
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
				<Typography variant='caption'>Words per Minute</Typography>
				<Slider
					style={{ width: '50vw' }}
					value={speed}
					valueLabelDisplay='on'
					step={40}
					min={100}
					max={220}
					marks={marks}
					onChange={(e, v) => setSpeed(v)}
					track={false}
				/>
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
