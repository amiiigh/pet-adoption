import React from 'react';
import {Link, useLocation, useHistory} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PetsIcon from '@material-ui/icons/Pets';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';


export const Navbar = () => {
	const useStyles = makeStyles({
		logo: {
			margin: '0 10px',
		}
	});
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();
	let buttons = "";
	if (location.pathname === '/results') {
		buttons =
			<Grid container direction={"row-reverse"} justify={"space-between"}>
				<Button endIcon={<SearchIcon />} component={Link} to="/" color={"inherit"}>
					Search Again
				</Button>
			</Grid>
	} else if (location.pathname.startsWith('/detail/')) {
		buttons =
			<Grid container direction={"row-reverse"} justify={"space-between"}>
				<Button endIcon={<SearchIcon />} component={Link} to="/" color={"inherit"}>
					Search Again
				</Button>
				<Button startIcon={<ArrowBackIcon />} onClick={() => history.goBack()} color={"inherit"}>
					Back
				</Button>
			</Grid>

	} else {
		buttons =
			<Grid container justify={"center"} alignItems={"center"} spacing={5}>
				<PetsIcon/>
				<Typography className={classes.logo}>
					PET ADOPTION
				</Typography>
				<PetsIcon/>
			</Grid>
	}
	return(
		<AppBar position={"static"}>
			<Toolbar variant={"dense"}>
				{buttons}
			</Toolbar>
		</AppBar>
	);
};