import React from 'react';
import styles from '../../styles/chatbot/StartBtn.module.scss';

interface Props {
	actions: {
		initialAction: () => void;
	};
}

const StartBtn: React.FC<Props> = (props) => {

	const initialAction = () => {
		props.actions.initialAction();
	}

	return (
		<div>
			<button className={styles['start-btn']} onClick={() => initialAction()}>Let's Get Started</button>
		</div >
	)
}

export default StartBtn;
