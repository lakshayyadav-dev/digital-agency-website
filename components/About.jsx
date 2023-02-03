import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

import office_1 from "../static/images/office.jpg";
import office_2 from "../static/images/office_2.jpg";
import office_3 from "../static/images/office_3.jpg";
import office_4 from "../static/images/office_4.jpg";
import office_5 from "../static/images/office_5.jpg";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
                <h1>we are experts in our work</h1>

                <p>We are a team that works diligently and efficiently on each project and selects profitable solutions according to our user criteria</p>

                <a href="" className="purpleBtn">To Begin</a>
            </div>

            <div className={styles.images}>
                <Image src={office_1} alt="office image" className={`${styles.image} ${styles.imageTall}`}/>
                <Image src={office_2} alt="office image" className={styles.image}/>
                <Image src={office_3} alt="office image" className={styles.image}/>
                <Image src={office_4} alt="office image" className={styles.image}/>
                <Image src={office_5} alt="office image" className={styles.image}/>
            </div>
		</div>
	);
};

export default About;
