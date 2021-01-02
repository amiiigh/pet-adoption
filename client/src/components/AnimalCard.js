import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Chip from '@material-ui/core/Chip';

export default function AnimalCard({ animal }) {
	const useStyles = makeStyles({
		root: {
			width: 300,
		},
		media: {
			height: 140,
		},
	});
	const classes = useStyles();
	return(
		<Card className={classes.root}>
			<CardActionArea component={Link} to={'/detail/' + animal.id}>
				<CardMedia
					className={classes.media}
					image={animal.picture}
					title={animal.name}
				/>
				<CardContent>
					<Typography gutterBottom variant={"h5"} component={"h2"}>
						{animal.name} <Chip variant={"outlined"} disabled size={"small"} label={animal.animal} />
					</Typography>
					<Typography variant={"overline"} component={"p"}>
						Age: {animal.age}
					</Typography>
					<Typography variant={"overline"} component={"p"}>
						Location: {animal.location}
					</Typography>
					<Typography variant={"overline"} component={"p"}>
						Breed: {animal.breed}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

AnimalCard.propTypes = {
	animal: PropTypes.shape({
		id: PropTypes.number.isRequired,
		animal: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		picture: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
	}).isRequired
}