import { Client } from 'yay.js';

const main = async () => {
	const client = new Client();

	await client.login({
		email: 'dqnkids@gmail.com',
		password: 'Yuuki530',
	});

	await client.createPost({
		text: 'Hello with yay.js!',
		sharedUrl: 'https://github.com/ekkx/yay.js',
	});
};

main();
