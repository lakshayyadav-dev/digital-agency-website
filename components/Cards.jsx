import React from "react";
import styles from "../styles/Cards.module.css";
import Card from "./Card";

const Cards = () => {
	return (
		<div className={styles.container}>
			<Card title="Functional Concept" />
			<Card title="Big Ideas" />
			<Card title="Creative" />
		</div>
	);
};

export default Cards;
