import React from 'react';
import styles from '../../styles/chatbot/DisplayImage.module.scss'

interface Props {
	state: {
		userData: {
			product: {
				imageUrl: string;
				link: string;
			};
		};
	};
}

const DisplayImage: React.FC<Props> = (props) => {
	const { imageUrl, link } = props.state.userData.product;
	console.log(props.state.userData);

	return (
		<div className={styles['img-component']}>
			<div className={styles['img-container']}>
				<img src={imageUrl} alt="" />
			</div>
			<a href={link} target='_blank' rel="noreferrer">Link</a>
		</div>
	);
}

export default DisplayImage;
