import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
const BASE_URL = "http://localhost:9000";

function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* index route is the default route */}
					<Route index element={<Homepage />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/product" element={<Product />} />
					{
						<Route path="/app" element={<AppLayout />}>
							{/* here we are creating nested routes */}

							{/* index route is the default route */}
							{/* Navigate feature of React Router allow us to redirect to another page */}
							{/* we can use Navigate feature to redirect to another page */}
							{/* replace prop allow us to replace the current page */}
							<Route index element={<Navigate replace to="cities" />} />
							<Route
								path="cities"
								element={<CityList cities={cities} isLoading={isLoading} />}
							/>
							{/* here we are using router to pass data in params */}
							<Route path="cities/:id" element={<City />} />
							<Route
								path="countries"
								element={<CountryList cities={cities} isLoading={isLoading} />}
							/>
							<Route path="form" element={<Form />} />
						</Route>
					}
					{<Route path="/login" element={<Login />} />}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
