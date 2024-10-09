import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TaskTable } from "./TaskTable.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
	const [task, setTask] = useState([]);
	const [input, setInput] = useState("");

	const inputRealTime = (valor) => {
		setInput(valor.target.value);
	};

	const addData = () => {
		const data = {
			task: input,
		};

		setTask([...task, data]);
	};

	return (
		<Container>
			<div className="title">
				<h1>TO DO LIST</h1>
			</div>
			<div className="task-section">
				<div className="task-input">
					<input
						type="text"
						value={input}
						placeholder="Ingrese su tarea aquí"
						onChange={inputRealTime}
					/>
					<button onClick={addData}>
						<FontAwesomeIcon icon={faPlus} /> Añadir Tarea
					</button>
				</div>
				<div className="table">
					<TaskTable task={task} />
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	.title {
		padding: 4em;
		background: aquamarine;
	}

	.task-section {
		padding: 4em;
		display: grid;
		gap: 2em;
	}
`;
