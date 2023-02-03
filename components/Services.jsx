import React from "react";
import styles from "../styles/Services.module.css";
import Card from "./Card";

const Services = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
                <Card title="UI/UX DESIGN" description="Quality UI/UX design, well designed UI functionality and creative UX design" width={350} height={300}/>
                <Card title="VISUAL DESIGN" description="Hight-quality visual design, well-thought-out functionality and creative design." width={350} height={300}/>
                <Card title="BRAND STYLE" description="The most hight-quality and selling brand style for your company" width={350} height={300}/>
                <Card title="DEVELOPMENT" description="Quality UI/UX design, well designed UI functionality and creative UX design" width={350} height={300}/>
            </div>

            <div className={styles.content}>
                <h1>We do Everything</h1>
                <p>Our agency provides all creative services, the best designers will work on your project and willl work only according to your specific conditions and requirements.</p>
                <a href="" className="purpleBtn">Read more</a>
            </div>
		</div>
	);
};

export default Services;
