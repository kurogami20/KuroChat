import type { Question } from '@/@types';

import instance from '@/utils/axios';

export const questionService = {
	async createQuestion(token: string, data: Omit<Question, 'id'>) {
		const response = await instance
			.post(`/question`, data, {
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

export default questionService;
