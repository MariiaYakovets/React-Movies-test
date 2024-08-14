import axios, { Axios, AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface IMovie {
	id: number;
	title: string;
	plot: string;
}

function useMovie(number: number) {
	let [movie, setMovie] = useState<IMovie>();
	let [error, setError] = useState<string | null>();
	let [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		async function getMovie() {
			try {
				setLoading(true);
				let response = await axios.get(
					`https://freetestapi.com/api/v1/movies/${number}`
				);
				setMovie(response.data);
				setError(null);
			} catch (err: AxiosError | any) {
				setError(err.message);
				console.log(err);
			} finally {
				setLoading(false);
			}
		}
		getMovie();
	}, [number]);

	return { movie: movie, error: error, loading: loading };
}

export default useMovie;
