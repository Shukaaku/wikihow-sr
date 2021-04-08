import request from 'node-superfetch';

interface wikihowResponse {
	id: number;
	title: string;
	language: string;
	url: string;
}

/**
 * Search on wikihow!
 */
const wikihowSearch = async (query: string): Promise<wikihowResponse | null> => {
	const q = query.replace(/^((how )?to )/i, '');
	const { body } = await request.get('https://www.wikihow.com/api.php').query({
		action: 'query',
		prop: 'info',
		format: 'json',
		titles: q,
		inprop: 'url',
		redirects: '',
	});
	// @ts-ignore
	const res = body!.query.pages[Object.keys(body!.query.pages)[0]];

	if (res.missing === '') return null;

	const data = {
		id: res.pageid,
		title: res.title,
		language: res.pagelanguage,
		url: res.fullurl,
	};

	return data;
};

export = wikihowSearch;
