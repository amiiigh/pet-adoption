import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";

export const Error = ({error}) => {
	const history = useHistory();
	return (
		<Grid container direction={"column"} justify={"center"} alignItems={"center"}>
			<Typography color={"textSecondary"} variant={"h5"} component={"h5"}>
				Something went wrong! Try again later
			</Typography>
			<Typography variant={"overline"} component={"h5"}>
				{error}
			</Typography>
			<IconButton aria-label={"reload"} onClick={()=> history.go(0)}>
				<ReplayOutlinedIcon/>
			</IconButton>
		</Grid>
	);
};

Error.propTypes = {
	error: PropTypes.string.isRequired
};