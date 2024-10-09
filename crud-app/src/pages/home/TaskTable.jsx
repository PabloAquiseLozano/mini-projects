import React from "react";
import { Table } from "antd";

export const TaskTable = ({ task }) => {
	const columns = [
		{
			title: "Tarea a Realizar",
			dataIndex: "task",
			key: "task",
		},
		{
			title: "Opciones",
			dataIndex: "options",
			key: "options",
		},
	];

	const data = (task, index) => {
		task.map((tas) => tas.task);
	};

	return (
		<Table
			style={{ width: "70%" }}
			columns={columns}
			dataSource={data}
			pagination={false}
		/>
	);
};
