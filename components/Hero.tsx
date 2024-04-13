"use client"

import React from 'react'
import styles from '../styles/hero/Hero.module.scss'
import PromoText from './hero/leftside/PromoText'
// import UserCount from './hero/leftside/UserCount'
// import ImageSlider from './hero/leftside/ImageSlider'

const Hero: React.FC = () => {
	return (
		<div className={styles['hero-wrap']}>
			<div className={styles['hero']}>
				<div className={styles['left-side']}>
					<PromoText />
					{/* <UserCount /> */}
					{/* <ImageSlider /> */}
				</div>
			</div>
		</div>
	)
}

export default Hero;
