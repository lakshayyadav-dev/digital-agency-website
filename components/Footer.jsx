import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

import twitter from "../static/images/twitter.png";
import instagram from "../static/images/instagram.png";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.contentBlock}>
					<h1>Follow the news</h1>

					<div>
						<p>+38 044 232-99-99</p>
						<p>sample@gmail.com</p>
					</div>
				</div>

				<div className={styles.contentBlock}>
					<h1>Go to Kava</h1>

					<div>
						<p>02025, m. Kiev, st. Vasyl</p>
						<p>Lukyan 16-a, office 32</p>
					</div>
				</div>

				<div className={styles.contentBlock}>
                    <h1>Contacts</h1>

                    <div className={styles.socialIconsContainer}>
                        <Image src={instagram} alt="instagram" className={styles.socialIcon}/>
                        <Image src={twitter} alt="twitter" className={styles.socialIcon}/>
                    </div>
                </div>
			</div>

            <div className={styles.copyright}>
                <p>2023 All rights reserved</p>
            </div>
		</div>
	);
};

export default Footer;
