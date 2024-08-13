import axios from "axios";
import React, { useEffect, useState } from "react";

interface IMovie {
	id: number;
	title: string;
	plot: string;
}
function Counter() {
	let [counter, setCounter] = useState(0);
	let [movie, setMovie] = useState<IMovie>();
	function addition() {
		setCounter(counter + 1);
	}

	function substraction() {
		setCounter(counter - 1);
	}

	useEffect(() => {
		async function getMovie() {
			if (counter > 0) {
				let response = await axios.get(
					`https://freetestapi.com/api/v1/movies/${counter}`
				);
				setMovie(response.data);
			}
		}
		getMovie();
	}, [counter]);

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={addition}>Add 1</button>
			<button onClick={substraction}>Substract 1</button>
			<h1>{movie?.title}</h1>
			<p>{movie?.plot}</p>
		</div>
	);
}

export default Counter;
