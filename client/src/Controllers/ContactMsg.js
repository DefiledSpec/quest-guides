class ContactMsg {
	validate() {
		// todo: add some validation here
		return false
	}
	async add(data) {
		if (this.validate()) {
			const headers = new Headers()
			headers.append('Content-Type', 'application/json')	
			const options = {
				method: 'POST',
				headers,
				body: JSON.stringify(data)
			}
			const request = new Request('http://localhost:3005/api/messages/add', options)
			try {
				const res = await fetch(request)
				if (await res.ok) return true
			} catch (err) {
				throw err
			}
		} else {
			alert('Sorry this doesn\'t work yet..')
			return false
		}
	}
}

export default new ContactMsg()
