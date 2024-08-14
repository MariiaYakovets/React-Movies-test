import axios from "axios";
import { useEffect, useState } from "react";

interface IMovie {
	id: number;
	title: string;
	plot: string;
}
function useMovies() {
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
	return { movies: movies };
}

export default useMovies;
