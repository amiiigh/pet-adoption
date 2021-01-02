import React from 'react';
import { useRequest } from 'ahooks';
import { useLocation } from 'react-router-dom';
import { sendSearchAnimalRequest } from "../api-handlers/animal";
import { Error } from "./Error";
import AnimalCard from './AnimalCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ResultsPage() {
	let location = useLocation();
	const { data, error, loading } = useRequest(()=> sendSearchAnimalRequest(location.search));

	if (loading) {
		return <CircularProgress/>
	}
	if (error) {
		return (
			<Error error={error}/>
		);
	}
	return (
		<Grid item xs={10}>
			<Grid justify={"center"} container spacing={2}>
				{
					data.length === 0 ?
						<Typography variant={"h5"} color={"textSecondary"} component={"h5"}>
							Sorry! We couldn't find any results
						</Typography> :
						data.map((animal) => {
							return(
								<Grid item key={animal.id}>
									<AnimalCard animal={animal}/>
								</Grid>
							)
						})
				}
			</Grid>
		</Grid>
	);
}