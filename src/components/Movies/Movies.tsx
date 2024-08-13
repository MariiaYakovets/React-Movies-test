import axios from "axios";
import React, { useEffect, useState } from "react";

interface IMovie {
	id: number;
	title: string;
	plot: string;
}

function Movies() {
	let [movies, setMovies] = useState<IMovie[]>([]);

	useEffect(() => {
		async function getMovies() {
			const response = await axios.get(
				"https://freetestapi.com/api/v1/movies"
			);
			setMovies(response.data);
		}
		getMovies();
	}, []);

	return (
		<div>
			{movies.map((value) => {
				return (
					<div key={value.id}>
						<h1>{value.title}</h1>
						<p>{value.plot}</p>
						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default Movies;
