import { ai, config, model } from '@/utils/GooglGenAi';

async function query(prompt: string) {
	const response = await ai.models.generateContentStream({
		model,
		...config,
		contents: [{ role: 'user', parts: [{ text: prompt }] }],
	});
	let fileIndex = 0;
	for await (const chunk of response) {
		console.log(chunk.text);
	}
}
export default query;
