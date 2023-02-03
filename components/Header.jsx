import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
                <h1>creation of digital brands and products</h1>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <p>
                        With 10+ years of experience in the digital industry, we have proven the combination of strategic thinking and experience
                    </p>
                </div>

                <div className={styles.buttons}>
                    <a href="" className="purpleBtn">To begin</a>
                    <a href="" className="btn">Learn about us</a>
                </div>
            </div>
		</div>
	);
};

export default Header;
