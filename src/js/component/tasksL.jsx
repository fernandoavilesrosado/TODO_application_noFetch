import React from "react";
import PropTypes from "prop-types";

const TasksL = props => {
	//console.log(props.list);
	return <li>{props.list}</li>;
};
TasksL.propTypes = {
	list: PropTypes.string
};
export default TasksL;
