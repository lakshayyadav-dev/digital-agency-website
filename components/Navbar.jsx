import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.bg}/>

			<div className={styles.holder}>
				<h1>DA</h1>

				<ul className={styles.navlinks}>
					<li><a href="#">About us</a></li>
					<li><a href="#">Advantages</a></li>
					<li><a href="#">Our services</a></li>
					<li><a href="#">Portfolio</a></li>
					<li><a href="#">Reviews</a></li>
				</ul>

				<a href="" className="btn">Sign in</a>
			</div>

            <div className={styles.burger}>
                <div />
                <div />
            </div>
		</nav>
	);
};

export default Navbar;
