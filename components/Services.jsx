import Image from "next/image";
import React from "react";
import styles from "../styles/Services.module.css";

import art_1 from "../static/images/art_1.jpg";
import art_2 from "../static/images/art_2.jpg";
import art_3 from "../static/images/art_3.jpg";
import art_4 from "../static/images/art_4.jpg";
import art_5 from "../static/images/art_5.jpg";
import art_6 from "../static/images/art_6.jpg";

const Services = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
                <h1>Our Latest Projects</h1>
                <p>We will make the most creative and high-quality design for you. We create a unique design for each client.</p>
                <a href="" className="purpleBtn">Read more</a>
            </div>

            <div className={styles.images}>
                <Image src={art_1} alt="art" className={`${styles.image} ${styles.imageTall}`}/>
                <Image src={art_2} alt="art" className={styles.image}/>
                <Image src={art_3} alt="art" className={styles.image}/>
                <Image src={art_4} alt="art" className={styles.image}/>
                <Image src={art_5} alt="art" className={`${styles.image} ${styles.imageTall}`}/>
                <Image src={art_6} alt="art" className={styles.image}/>
            </div>
		</div>
	);
};

export default Services;
