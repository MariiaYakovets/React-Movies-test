import axios from "axios";
import React, { useEffect, useState } from "react";
import useMovie from "../../hooks/useMovie";
import { DNA } from "react-loader-spinner";

function Counter() {
	let [counter, setCounter] = useState(0);
	function addition() {
		setCounter(counter + 1);
	}

	function substraction() {
		setCounter(counter - 1);
	}
	let { movie: movie, error: error, loading: loading } = useMovie(counter);

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={addition}>Add 1</button>
			<button onClick={substraction}>Substract 1</button>

			<p>{error}</p>
			<p>
				{loading ? (
					<DNA
						visible={true}
						height="80"
						width="80"
						ariaLabel="dna-loading"
						wrapperStyle={{}}
						wrapperClass="dna-wrapper"
					/>
				) : (
					<>
						<h1>{movie ? movie.title : ""}</h1>
						<p>{movie ? movie.plot : ""}</p>
					</>
				)}
			</p>
		</div>
	);
}

export default Counter;
