import instance from '@/utils/axios';

export const conversationService = {
	async getConversations(token: string) {
		const response = await instance
			.get('/conversations', {
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
	async getConversation(token: string, data: { id: number }) {
		const response = await instance
			.post(`/conversation`, data, {
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
	async createConversation(token: string) {
		const response = await instance
			.post(`/conversations/create`, {
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
export default conversationService;
