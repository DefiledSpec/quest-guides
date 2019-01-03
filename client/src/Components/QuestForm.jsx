import React, { Component } from 'react';
import quests from '../Controllers/questController'
import { QuestList } from './'

class QuestForm extends Component {
	state = { 
		title: 'sdfg',
		yt: 'sdfg',
		ytName: '',
		runeHq: '',
		length: 'Short',
		qp: 0,
		difficulty: 'Novice',
		series: 'n/a',
		members: false,
	 }

	async componentWillMount() {
		// try {
		// 	await quests.getAll()
		// } catch (err) {
		// 	console.log(err)
		// }
	}

	handleChange = ({ target }) => {
		let { name, value, type, } = target
		let result = type === 'checkbox' ? target.checked : value
		this.setState({ [name]: result })
	}

	handleSubmit = async(e) => {
		e.preventDefault()
		let quest = {}
		let inputs = this.state
		for (const ea in inputs) {
			if (inputs[ea] !== '') {
				ea === 'qp' ? 
				quest[ea] = parseInt(inputs[ea]) :
				quest[ea] = inputs[ea]
			} 
		}

		let added = await quests.addQuest(quest)
		
		console.log(added)
		this.props.update(added)
	}

	


	render() { 
		return ( 
			<form method="post" onSubmit={this.handleSubmit}>
				<label htmlFor="title">Quest Name
					<input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
				</label>
				<label htmlFor="yt">YouTube Guide
					<input type="text" name="yt" value={this.state.yt} onChange={this.handleChange} required />
				</label>
				<label htmlFor="ytName">YouTube Name
					<input type="text" name="ytName" onChange={this.handleChange} />
				</label>
				<label htmlFor="runeHQ">Rune HQ Guide
					<input type="text" placeholder='Rune HQ Guide' name="runeHq" onChange={this.handleChange} />
				</label>
				<label htmlFor="length">Quest Length
					<select name='length' defaultValue={this.state.length} onChange={this.handleChange}>
						<option value="Short">Short</option>
						<option value="Short-Medium">Short-Medium</option>
						<option value="Medium">Medium</option>
						<option value="Medium-Long">Medium-Long</option>
						<option value="Long">Long</option>
						<option value="Very-Long">Very-Long</option>
					</select>
				</label>
				<label htmlFor="difficulty">Quest Difficulty
					<select name='difficulty' defaultValue={this.state.difficulty} onChange={this.handleChange}>
						<option value="Novice">Novice</option>
						<option value="Intermediate">Intermediate</option>
						<option value="Experienced">Experienced</option>
						<option value="Master">Master</option>
						<option value="Grandmaster">Grandmaster</option>
					</select>
				</label>
				<label htmlFor="qp">Quest Points
					<input type="number"  name="qp" onChange={this.handleChange} />
				</label>
				<label htmlFor="series">Quest Series
					<input type="text"  name="series" onChange={this.handleChange} />
				</label>
				<label htmlFor="members">Members?
					<input type="checkbox" name="members" onChange={this.handleChange} />
				</label>
				<input type="submit" value={'Submit'}/>
			
			</form>

		);
	}
}
 
// switch(name) {
// 	case 'qp':
// 	case 'members':
// 		this.setState({ [name]: value })

// 	default: 
// 		this.setState({ [name]: value })
// }

export default QuestForm;