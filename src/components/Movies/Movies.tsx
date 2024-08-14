import axios from "axios";
import React, { useEffect, useState } from "react";
import useMovies from "../../hooks/useMovies";

function Movies() {
	let { movies: movies } = useMovies();
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
