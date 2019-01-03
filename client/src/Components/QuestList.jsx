import React, { Component } from 'react';
import quests from '../Controllers/questController'
import { ReactVirtualizedTable } from './'


let id = 0;
function createData(dessert, calories, fat, carbs, protein) {
	id += 1;
	return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

// for (let i = 0; i < 200; i += 1) {
//   const randomSelection = data[Math.floor(Math.random() * data.length)];
//   rows.push(createData(...randomSelection));
// }
let columns = [
	{
	  width: 200,
	  flexGrow: 1.0,
	  label: 'Quest Name',
	  dataKey: 'title',
	},
	{
	  width: 120,
	  label: 'YouTube Guide',
	  dataKey: 'yt',
	},
	{
	  width: 120,
	  label: 'RuneHQ Guide',
	  dataKey: 'runeHq',
	},
	{
	  width: 120,
	  label: 'Quest Points',
	  dataKey: 'qp',
	  numeric: true,
	},
	{
	  width: 120,
	  label: 'Quest Length',
	  dataKey: 'length',
	  numeric: true,
	},
  ]

function aLink(props) {
	return (
		<a href={props.link}>{props.title}</a>
	)
}

class QuestList extends Component {
	state = {
		questList: [],
		rows: [],
		numRows: 0,
		selected: []
	}
	componentWillMount = async () => {
		this.createList()	
	}
	
	createList = (list) => {
		let items = list || this.props.list
		let rows = items.map((quest, rowId) => {
			let { _id, title, yt, ytName, runeHq, qp, difficulty, length } = quest
			let ytLink = aLink({link: yt, title: ytName})
			let runeHqLink = aLink({link: runeHq, title: 'Rune Hq'})
			return { _id, rowId, title, yt: ytLink, runeHq: runeHqLink, qp, difficulty, length }
		})
		return rows
	}
	onRowClick = (e) => {
		console.log(e.rowData._id)
		quests.deleteQuest(e.rowData._id).then(() => this.props.update(e.rowData._id))
			this.props.update()
	}

	render() {
		// let { questList, rows, numRows } = this.state
		const { list } = this.props
		let rows = this.createList(list)
		console.log(rows)
		let numRows = rows.length

		return (
			<div>
				{numRows > 0 && 
					<ReactVirtualizedTable 
						rows={rows} 
						rowClick={this.onRowClick} 
						columns={columns} 
					/> 
				}
			</div>
		);
	}
}

export default QuestList;