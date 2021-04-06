import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import Navbar from './components/Navbar'
import UploadPDF from './components/UploadPDF'
import CopyText from './components/CopyText'
import Player from './components/Player'
import corpus from './corpus'

const App = () => {
	const [show, setShow] = useState(false)
	const [text, setText] = useState(corpus)

	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route path='/pdf'>
						<UploadPDF
							text={text}
							setText={setText}
							show={show}
							setShow={setShow}
						/>
					</Route>
					<Route path='/text'>
						<CopyText
							text={text}
							setText={setText}
							show={show}
							setShow={setShow}
						/>
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Player text={text} show={show} setShow={setShow} />
			<Typography
				variant='caption'
				align='center'
				style={{ position: 'fixed', bottom: 0, width: '100%', color: '#999' }}
			>
				Developed by{' '}
				<a href='https://www.vikasxpandey.in' target='_blank'>
					Vikas Pandey
				</a>
			</Typography>
		</>
	)
}

export default App

function Home() {
	return <h2>Home</h2>
}
