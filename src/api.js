import axios from 'axios';

// Settles connection to the API provider
export default axios.create({
	baseURL: 'http://34.140.173.42/api',
	headers: {
		'Content-type': 'application/json',
	},
});
