import React, { useEffect, useState } from "react";
//include images into your bundle
import TasksL from "./tasksL.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);
	const [taskRender, setTaskReder] = useState([]);

	const keepTask = newtask => {
		//console.log(newtask.target.value);
		if (newtask.key === "Enter") {
			setTaskList([...taskList, newtask.target.value]);
			newtask.target.value = "";
		}
		//console.log(newtask.key);
	};
	//
	useEffect(() => {
		setTaskReder(
			taskList.map((listMap, index) => {
				return <TasksL key={index.toString()} list={listMap} />;
			})
		);
		//console.log(taskList);
		//console.log(taskRender);
	}, [taskList]);
	//
	return (
		<div className=" text-center mt-5">
			<h1>TASK LIST</h1>
			<input
				id="task"
				onKeyPress={event => {
					keepTask(event);
				}}
				type="text"
				placeholder="add new task"></input>
			<ul>{taskRender}</ul>
		</div>
	);
};
export default Home;
