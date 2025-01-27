import { useState } from "react";
import "./index.css";
import binIcon from "./assets/bin.png";
function App() {
    // Tasks:
    // 1 - Checkbox
    // 2 - Text value
    // 3 - Delete
    let [value, setValue] = useState("");
    let [finalVal, setFinalVal] = useState("");
    // let [tasks, setTasks] = useState([]);
    let [tasks, setTasks] = useState([
        {
            id: 1,
            checked: false,
            textValue: "Task 1",
        },
    ]);

    let handleSubmit = (e) => {
		e.preventDefault();
        if (value != "") {
			// e.preventDefault();
            setFinalVal(value);
            // setTasks([...tasks, value]);
            setTasks([
                ...tasks,
                { id: Date.now(), checked: false, textValue: value },
            ]);
			setValue("")
            // setValue('')
        }
    };

    let handleChecked = (id) => {	
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        );
    };

    let handleDelete = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    };
    return (
        <div className="mainBody">
            <div className="main">
                <div className="top">
                    <h1>TO-DO List 📃</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="leftOfItem">
                            <input
                                id="inp"
                                type="text"
                                placeholder="Enter your TODO"
                                autocomplete="off"
								value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </label>
                        <input className="btn" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="bottom">
                    <div className="container">
                        <ol className="list">
                            {tasks.map((task, index) => (
                                <li key={index} className="listItem" style={{
										backgroundColor: task.checked ? "#465146f5" : "#232327f5"

									}}>
                                    <label className="leftOfItem">
                                        <input
                                            type="checkbox"
                                            name="checker"
                                            id="checker"
                                            checked={task.checked}
                                            onChange={() =>
                                                handleChecked(task.id)
                                            }
                                        />
                                        <span></span>
                                        <p className="taskText" style={{
												textDecoration: task.checked ? "line-through" : "none"
											}}>
                                            {task.textValue}
                                        </p>
                                    </label>
                                    <button
                                        className="delete"
                                        onClick={() => handleDelete(task.id)}
										disabled={task.checked}
										style={{
											backgroundColor: task.checked ? '#d3d3d3' : '',
											cursor : task.checked ? 'not-allowed' : 'pointer',
											pointerEvents : task.checked ? 'none' : ''
										}}
                                    >
                                        <img
                                            className="btnImg"
                                            src={binIcon}
                                            alt=""
                                        />
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
