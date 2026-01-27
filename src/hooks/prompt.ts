import { useQuery } from '@tanstack/react-query';
import query from '@/services/prompt';

export const usePrompt = (prompt: string) => {
	return useQuery({
		queryKey: ['prompt', prompt],
		queryFn: () => query(prompt),
		enabled: !!prompt,
	});
};
