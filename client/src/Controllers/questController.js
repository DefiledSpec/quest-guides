import { fetchJson, fetchRequest } from '../helpers'


const json = 'application/json'
const content = 'Content-Type'
const get = 'GET'
const del = 'DELETE'
const url = 'quests'

/**
 *  Controls interacting with the quests api
 *  @constructor 
 */
class QuestController {

	/**
	 * @constructor
	 */
	constructor(cache) {
		this.cache = cache || null
		this.apiUrl = 'quests'
		if(!this.cache) this.preFetch()
	}

	async preFetch() {
		this.cache = fetchJson(this.apiUrl, get)
	}

	async getAll() {
		if(this.cache && this.cache !== null) return this.cache
		console.log('not cached')
		return fetchJson(this.apiUrl, get)
	}
	async addQuest(quest) {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(quest)
		}
		const request = new Request('api/quests', options)
		let res = await fetch(request)
		return await res.json()
		
	}
	async deleteQuest(id) {
		console.log('Deleting', id)
		return fetchJson(`${this.apiUrl}/${id}`, del)

	}
	

}

export default new QuestController()
