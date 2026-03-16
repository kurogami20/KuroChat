import type { User } from '@/@types/index';

import instance from '@/utils/axios';

const userService = {
	async signUp(data: Omit<User, 'id'>) {
		const response = await instance.post('/signup', data).catch((error) => {
			if (error.response) {
				// la requête a été faite et le code de réponse du serveur n’est pas dans
				// la plage 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return error.response;
			} else if (error.request) {
				// la requête a été faite mais aucune réponse n’a été reçue
				// `error.request` est une instance de XMLHttpRequest dans le navigateur
				// et une instance de http.ClientRequest avec node.js
				console.log(error.request);
				return error.request;
			} else {
				// quelque chose s’est passé lors de la construction de la requête et cela
				// a provoqué une erreur
				console.log('Error', error.message);
				return error.message;
			}
			// console.log(error.config);
		});

		return response?.data;
	},
	async login(data: Omit<User, 'id'>) {
		const response = await instance.post('/login', data).catch((error) => {
			if (error.response) {
				// la requête a été faite et le code de réponse du serveur n’est pas dans
				// la plage 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return error.response;
			} else if (error.request) {
				// la requête a été faite mais aucune réponse n’a été reçue
				// `error.request` est une instance de XMLHttpRequest dans le navigateur
				// et une instance de http.ClientRequest avec node.js
				console.log(error.request);
				return error.request;
			} else {
				// quelque chose s’est passé lors de la construction de la requête et cela
				// a provoqué une erreur
				console.log('Error', error.message);
				return error.message;
			}
			// console.log(error.config);
		});

		return response?.data;
	},
	async logout(token: string) {
		const response = await instance
			.post('/logout', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.catch((error) => {
				if (error.response) {
					// la requête a été faite et le code de réponse du serveur n’est pas dans
					// la plage 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// la requête a été faite mais aucune réponse n’a été reçue
					// `error.request` est une instance de XMLHttpRequest dans le navigateur
					// et une instance de http.ClientRequest avec node.js
					console.log(error.request);
				} else {
					// quelque chose s’est passé lors de la construction de la requête et cela
					// a provoqué une erreur
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

		return response?.data;
	},
};

export default userService;
