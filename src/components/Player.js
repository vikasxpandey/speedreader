import { useState, useEffect, useRef } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Play from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import Close from '@material-ui/icons/Close'
import Prev from '@material-ui/icons/SkipPrevious'
import Next from '@material-ui/icons/SkipNext'
import Reset from '@material-ui/icons/RotateLeft'

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}))

const Player = ({ text, show, setShow, speed }) => {
	const classes = useStyles()
	const countRef = useRef(null)

	const listOfWords = text.split(' ')
	const [count, setCount] = useState(0)
	const [play, setPlay] = useState(false)

	const handlePlayPause = () => {
		if (!play) {
			setPlay(true)
			countRef.current = setInterval(() => {
				setCount((count) => Math.min(count + 1, listOfWords.length - 1))
			}, speed)
		} else {
			setPlay(false)
			clearInterval(countRef.current)
		}
	}

	const handlePrev = () => {
		setPlay(false)
		clearInterval(countRef.current)
		setCount((count) => Math.min(count - 1, listOfWords.length - 1))
	}

	const handleNext = () => {
		setPlay(false)
		clearInterval(countRef.current)
		setCount((count) => Math.min(count + 1, listOfWords.length - 1))
	}

	const handleClose = () => {
		setPlay(false)
		clearInterval(countRef.current)
		setShow(!show)
	}

	const handleReset = () => {
		setPlay(false)
		clearInterval(countRef.current)
		setCount(0)
	}

	return (
		<Backdrop className={classes.backdrop} open={show}>
			<Card>
				<CardContent>
					<Typography align='center'>{listOfWords[count]}</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={handlePrev}>
						<Prev />
					</Button>
					<Button onClick={handlePlayPause}>
						{play ? <Pause /> : <Play />}
					</Button>
					<Button onClick={handleNext}>
						<Next />
					</Button>
				</CardActions>
				<CardActions style={{ justifyContent: 'space-between' }}>
					<Button onClick={handleReset}>
						<Reset />
					</Button>
					<Button onClick={handleClose}>
						<Close />
					</Button>
				</CardActions>
			</Card>
		</Backdrop>
	)
}

export default Player
