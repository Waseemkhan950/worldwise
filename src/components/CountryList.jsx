import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
function CountryList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;

	if (!cities.length) {
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);
	}
	const countries = cities.reduce((arr, city) => {
		// the following line checks if the country is already in the array or not and if not it adds it.
		if (!arr.map((el) => el.country).includes(city.country)) {
			return [
				...arr,
				{ country: city.country, emoji: city.emoji, id: city.id },
			];
		} else {
			return arr;
		}
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((city) => (
				<CountryItem country={city} key={city.id} />
			))}
		</ul>
	);
}

export default CountryList;
