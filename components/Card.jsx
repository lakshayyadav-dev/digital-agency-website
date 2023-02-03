import React from "react";
import styles from "../styles/Cards.module.css";

const Card = ({title, description, width, height}) => {
	return (
		<div className={styles.card} style={{width:width, height:height}}>
            <h1>{title}</h1>
            <p>{description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus voluptatem officia vero necessitatibus sint cupiditate repudiandae perferendis aut quod quae nobis provident, totam dolore quaerat adipisci tempore debitis enim."}</p>
        </div>
	);
};

export default Card;
