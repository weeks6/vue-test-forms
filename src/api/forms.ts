import { mockHash } from '../utils/mockHash';
import type { FormResponse } from '../utils/types';

export async function sendForm(
	url: string,
	values: Record<string, any>
): Promise<FormResponse> {
	let body = JSON.stringify(values);

	const result = await fetch(url, {
		method: 'POST',
		body,
	});

	return result.json() as unknown as FormResponse;
}

export function mockSendForm(
	...args: Parameters<typeof sendForm>
): ReturnType<typeof sendForm> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let body = {};
			try {
				//  try to parse the body to organically throw
				body = JSON.stringify(args[1]);
			} catch (error) {
				reject(error);
			}

			if (Math.random() > 0.5) {
				resolve({ id: mockHash(JSON.stringify(body)), timestamp: new Date() });
			} else {
				resolve({
					error: { message: 'Some mock error' },
					timestamp: new Date(),
				});
			}
		}, 1000);
	});
}
