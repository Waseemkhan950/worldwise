import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
function Map() {
	// query params are now accessible using useSearchParams hook provided by react router;
	const [searchParams, setSearchParams] = useSearchParams();
	// setSearchParams allow us to update the query params and that change will be reflected in the URL and entire app
	// query params allow us to bookmark exact pages and share the urls with params with our friends and family
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	// React Router also allows use to use programtic navigation; which means we can navigate to any page we want
	const navigate = useNavigate();
	return (
		<div className={styles.mapContainer} onClick={() => navigate(`form`)}>
			<h1>Map</h1>
			<h1>
				Position: {lat} {lng}
			</h1>
		</div>
	);
}

export default Map;
