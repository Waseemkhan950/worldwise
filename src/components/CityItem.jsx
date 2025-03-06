import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
	const { cityName, emoji, date, id, position } = city;
	const formatDate = (date) =>
		new Intl.DateTimeFormat("en", {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(date));
	return (
		<li>
			{/* here we are wrapping the elements of which we want to receive the id: or something else in params */}
			{/* Link is also used to pass query params which are followed by ? where we set lat and lng. & is used to separate them */}
			{/* the query params are now accessible everywhere; they are like global variables */}
			<Link
				className={styles.cityItem}
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>{formatDate(date)}</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}
export default CityItem;
