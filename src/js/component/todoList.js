import React, { useState, useEffect } from "react";

const ToDoList = () => {
	const [list, setList] = useState([]);
	const [listMap, setListMap] = useState("");

	useEffect(() => {
		setListMap(
			list.map((task, index) => {
				return (
					<li key={index.toString()}>
						<span>{task}</span>
						<button
							className="delete"
							onClick={() => {
								deleteTask(index);
							}}>
							X
						</button>
					</li>
				);
			})
		);
		console.log(listMap);
	}, [list]);

	const deleteTask = indexDelete => {
		setList(list.filter((_, index) => index != indexDelete));
	};

	return (
		<div className=" p-4 col">
			<h1>To Do List</h1>
			<input
				type="text"
				placeholder="add a new task here and push enter"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setList([...list, event.target.value]);
						event.target.value = "";
					}
				}}></input>
			<section>
				<ul>{listMap}</ul>
			</section>
		</div>
	);
};

export default ToDoList;
