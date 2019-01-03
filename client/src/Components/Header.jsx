import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = {
	root: {
		flexGrow: 1,
		width: '100%',
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	appBar: {
		background: '#24292e'
	}
}

class Header extends Component {
	state = {
		admin: false
	}
	// async componentWillMount() {
	// 	let bool = await fetch('/api/admin')
	// 	let auth = await bool.json()
	// 	this.setState({ admin: auth })
	// }
	render() {
		const { classes, siteName } = this.props
		return (
			<header className={classes.root}>

				{/* <AppBar position='static' className={classes.appBar}>
					<Toolbar>
						<Typography variant='title' color='inherit' className={classes.flex}>
							{siteName}
						</Typography>
						<Button component={Link} color='inherit' to='/'>About</Button> */}
				{/* <Button  component={Link} color='inherit' to='/'>Resume</Button> */}
				{/* <Button component={Link} color='inherit' to='/projects'>Projects</Button>
						<Button component={Link} color='inherit' to='/contact'>Contact Me</Button>
						{this.state.admin && <Button component={Link} color='inherit' to='/admin'>Admin</Button>}
					</Toolbar>
				</AppBar> */}
				{/* <h2 className={`title`}>Jesse Harrah</h2>
				<Icon icon={`menu`} iconClass='nav-icon'/>
				<div className="clearfix"></div> */}
			</header>


		)
	}
}

export default withStyles(styles)(Header)
