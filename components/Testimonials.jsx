import React from "react";
import styles from "../styles/Testimonials.module.css";
import Card from "./Card";

import person_1 from "../static/images/person_1.jpg";
import person_2 from "../static/images/person_2.jpg";
import person_3 from "../static/images/person_3.jpg";

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<div>
				<Card
					className={styles.card}
					imageUrl={person_1}
					title="ROBERT NILS"
					description="Very good service. Everything was done on time by the designers and a very original solution to the work."
				/>
			</div>
			<div>
				<Card
					className={styles.card}
					imageUrl={person_2}
					title="ANNA MARK"
					description="Very good service. Everything was done on time by the designers and a very original solution to the work."
				/>
			</div>
			<div>
				<Card
					className={styles.card}
					imageUrl={person_3}
					title="JOHN DOE"
					description="Very good service. Everything was done on time by the designers and a very original solution to the work."
				/>
			</div>
		</div>
	);
};

export default Testimonials;
