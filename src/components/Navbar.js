import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	button: {
		color: '#fff',
		textDecoration: 'none',
		marginRight: theme.spacing(2),
		fontFamily: 'roboto',
		'&:hover': {
			color: '#ddd'
		}
	}
}))

const Navbar = () => {
	const classes = useStyles()

	return (
		<AppBar position='static'>
			<Toolbar className={classes.root}>
				<Typography variant='h6' className={classes.title}>
					Speed Reader (Alpha)
				</Typography>

				{/* <Link className={classes.button} color='inherit' to='/pdf'>
					PDF
				</Link>
				<Link className={classes.button} color='inherit' to='/text'>
					TEXT
				</Link> */}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
