import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Typography, Avatar} from '@material-ui/core'
import classNames from 'classnames'
import QuestForm from './QuestForm'
import QuestList from './QuestList'
import withRoot from '../withRoot'
import quests from '../Controllers/questController'

const styles = {
	display1: {
		padding: '.55em',
		margin: '0 auto',
		width: '80%',
		color: '#24292e',
		borderBottom: '#24292e solid .5px'
	},
	root: {
		maxWidth: '960px',
		margin: '2.5em auto 5em auto',
		padding: '1em 2em',

	},
	avatar: {
		margin: '2em auto 0 auto',
	},
	bigAvatar: {
		width: 140,
		height: 140,
	},
	about: {
		fontSize: '1.4em',
		textAlign: 'center',
		margin: '1em 1.5em',
	},
	icons: {
		width: 'max-content',
		margin: '2.5em auto',
		borderTop: '#24292e .5px solid',
		borderBottom: '#24292e .5px solid',
		padding: '.75em 5em',
		
	},
	mdIcon: {
		fontSize: '2.2em',
		padding: '.375em',
		margin: '0 .5em',
		borderRadius: '50%',
	}
}

class Home extends Component {
	state = {
		questList: []
	}
	componentWillMount() {
		this.getQuestList()
	}
	getQuestList = async() => {
		console.log('getting list')
		let list = await quests.getAll()
		this.setState({questList: list})
	}
	updateQuestList = (quest) => {
		console.log(quest)
		let list = [...this.state.questList, quest]
		console.log(list)
		this.setState({questList: list})
		console.log('updated')
	}
	removeQuest = (id) => {
		console.log(id)
		let list = this.state.questList.filter((ea) => {
			console.log(ea._id, id )
			return ea._id !== id})
		this.setState({questList: list})
	}

	render() {
		const {classes} = this.props
		const {questList} = this.state

		return (
			<Paper className={classes.root}>
				<h1>OSRS Quest Guide</h1>
				<QuestForm update={this.updateQuestList} />
				{questList && <QuestList update={this.removeQuest} list={questList} />}
			</Paper>
		)
	}
}

export default withRoot(withStyles(styles)(Home))
