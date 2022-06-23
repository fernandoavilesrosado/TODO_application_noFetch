import React from "react";
import PropTypes from "prop-types";

const TasksL = props => {
	return (
		<div>
			<div className="taskList-container  text-dark">
				{props.text}
			</div>;
		</div>

	)
};
export default TasksL;

TasksL.propTypes = {
	list: PropTypes.string
};
