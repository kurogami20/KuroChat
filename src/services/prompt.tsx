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

	const response = await ai.models.generateContent({
		model,
		...config,
		contents: prompt,
	});
	return response.text;
}
export default query;
