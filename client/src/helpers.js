
/**
 * @param request The request to be fetched
 * @description 
 */

// const json = 
const content = 'Content-Type'

function createRequest(url, method, data, type) { 
	if(url && typeof url === 'string') {
		const headers = new Headers()
		if (type) headers.append(content, type)
		// console.log(data, method)
		const options = {
			method,
			headers,
			body: JSON.stringify(data)
		}
		let req = new Request(`api/${url}`, options)
		// console.log(req)
		return req
	} else {
		return null
	}
}

async function fetchRequest(request) {
	if (!request) return {error: 'No request method specified.'}
	try {
		let res = await fetch(request)
		res = await res.json()
		return res
	} catch (error) {
		return error
	}
}

async function fetchJson(url, method, data, type) {
	if (!url) return {error: 'No url defined'}
	if(!method) return {error: 'No method defined'}
	let request
	request =  await createRequest(url, method, data, type)
	return await fetchRequest(request)
}

export {
	fetchJson,
	fetchRequest
}