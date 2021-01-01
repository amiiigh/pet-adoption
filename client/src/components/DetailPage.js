import React from 'react';
import { useParams } from "react-router-dom";
import { useRequest } from 'ahooks';
import { sendGetAnimalDetail } from "../api-handlers/animal";
import { Error } from "./Error";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function DetailPage(props) {
	const {id} = useParams();
	const { data, error, loading } = useRequest(() => sendGetAnimalDetail(id));
	const useStyles = makeStyles({
		root: {
			width: 500,
		},
		media: {
			height: 200,
		},
	});
	const classes = useStyles();
	if (error) {
		return (
			<Error error={error}/>
		);
	}
	if (loading) {
		return <CircularProgress/>
	}
	return (
		<Grid item xs={10}>
			<Grid item container justify={"center"}>
				{
					<Card className={classes.root}>
						<CardMedia
							className={classes.media}
							image={data.picture}
							title={data.name}
						/>
						<CardContent>
							<Typography gutterBottom variant={"h5"} component={"h2"}>
								{data.name} <Chip variant={"outlined"} disabled size={"small"} label={data.animal} />
							</Typography>
							<Typography variant={"overline"} component={"p"}>
								Age: {data.age}
							</Typography>
							<Typography variant={"overline"} component={"p"}>
								Location: {data.location}
							</Typography>
							<Typography variant={"overline"} component={"p"}>
								Breed: {data.breed}
							</Typography>
							<Typography variant={"overline"} component={"p"}>
								Favorite Food: {data.favs}
							</Typography>
							<Typography variant={"body2"} color={"textSecondary"} component={"p"}>
								{data.about}
							</Typography>
						</CardContent>
					</Card>
				}
			</Grid>
		</Grid>
	);
}