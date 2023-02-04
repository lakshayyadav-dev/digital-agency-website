import Image from "next/image";
import React from "react";
import styles from "../styles/Cards.module.css";

const Card = ({title, description, width, height, imageUrl}) => {
	return (
		<div className={styles.card} style={{width:width, height:height}}>
            {imageUrl && (
                <Image src={imageUrl} alt="image" className={styles.image}/>
            )}
            <h1>{title}</h1>
            <p>{description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus voluptatem officia vero necessitatibus sint cupiditate repudiandae perferendis aut quod quae nobis provident, totam dolore quaerat adipisci tempore debitis enim."}</p>
        </div>
	);
};

export default Card;
