// Define this when using the App router API
'use client';

// !!Useful links at the bottom!!
// import {DeepChat as DeepChatCore} from 'deep-chat'; <- type
import styles from '../../styles/chatbot/Chatbot.module.scss';
import dynamic from 'next/dynamic';
import axios from 'axios';

const instance = axios.create();

type Request = {
	instance: any;
}

instance.interceptors.request.use((config) => {
	console.log('Request: ', config);
	console.log('Request Data: ', config.data);
	return config;
}, (error) => {
	console.log('Request Error: ', error);
	return Promise.reject(error);
});

export default function Home() {
	const initialMessages = [
		{ role: 'user', text: 'Hey, how are you today?' },
		{ role: 'ai', text: 'I am doing very well!' },
	];

	// need to import the component dynamically as it uses the 'window' property
	const DeepChat = dynamic(
		() => import('deep-chat-react').then((mod) => mod.DeepChat),
		{
			ssr: false,
		}
	);

	// demo/style/textInput are examples of passing an object directly into a property
	// initialMessages is an example of passing a state object into the property
	return (
		<>
			<main className={styles.main}>
				<h1>Deep Chat</h1>
				<DeepChat
					request={{
						"url": "http://10.147.20.141:5118/AIPrompt/AskAI",
						"method": "POST",
					}}
					style={{ borderRadius: '10px' }}
					textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
					initialMessages={initialMessages}
				/>
			</main>
		</>
	);
}

// Info to get a reference for the component:
// https://github.com/OvidijusParsiunas/deep-chat/issues/59#issuecomment-1839483469

// Info to add types to a component reference:
// https://github.com/OvidijusParsiunas/deep-chat/issues/59#issuecomment-1839487740
