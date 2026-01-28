import { GoogleGenAI } from '@google/genai';

async function query(prompt: string) {
	const ai = new GoogleGenAI({
		apiKey: import.meta.env?.VITE_GOOGLE_AI_API_KEY,
	});

	const config = {
		thinkingConfig: {
			thinkingLevel: 'HIGH',
		},
	};

	const model = 'gemini-3-flash-preview';

	const response = await ai.models.generateContentStream({
		model,
		...config,
		contents: [{ role: 'user', parts: [{ text: prompt }] }],
	});
	let fileIndex = 0;
	let fullResponse = '';
	for await (const chunk of response) {
		fullResponse += chunk.text;
		if (fileIndex === 0) {
			return chunk.text;
		}
		fileIndex++;
	}
	return fullResponse;
}
export default query;
