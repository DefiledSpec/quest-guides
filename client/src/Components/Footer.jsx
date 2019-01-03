import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		textAlign: 'center',
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		padding: '.6em',
		margin: 'auto',
		background: '#24292e',
	},
	small: {
		color: 'ghostwhite',
		fontSize: '.75em'
	}
}

class Footer extends Component {
	render() {
		let { classes } = this.props
		return (
			<footer className={classes.root}>
				<Typography className={classes.small}>All Rights Reserved. &copy; Copyright 2018 - 20**</Typography>
			</footer>
		)
	}
}

export default withStyles(styles)(Footer)
