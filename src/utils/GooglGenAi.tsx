import { GoogleGenAI } from '@google/genai';

export const ai = new GoogleGenAI({
	apiKey: process.env.GOOGLE_AI_API_KEY || '',
});

export const config = {
	thinkingConfig: {
		thinkingLevel: 'HIGH',
	},
};

export const model = 'gemini-3-flash-preview';
