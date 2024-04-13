import React, { useState, useEffect } from 'react'; import { imageData } from '../../data/imageData';

const ImageSlider: React.FC = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((currentImageIndex + 1) % imageData.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [currentImageIndex]);

	return (
		<img src={imageData[currentImageIndex].src} alt={imageData[currentImageIndex].alt} />
	);
};

export default ImageSlider;
