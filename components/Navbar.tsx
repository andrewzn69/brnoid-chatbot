"use client"

import React from 'react'
import styles from '../styles/navbar/Navbar.module.scss'
import Logo from './navbar/Logo'
// import LeftSide from './navbar/LeftSide'
// import RightSide from './navbar/RightSide'

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			{/* <LeftSide /> */
			/* <RightSide /> */}
		</nav>
	)
}

export default Navbar
