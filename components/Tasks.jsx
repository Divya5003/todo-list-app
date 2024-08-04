import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios';

const Tasks = ({ searchValue = "", status = "all" }) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:3000/api/read-data');
            setTasks(response.data);
        }

        if (status === 'all' && searchValue.trim() === "") {
            fetchTasks();
        }
        else {
            var filteredTasks = [...tasks];
            if (searchValue.trim() !== "") {
                filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchValue.toLowerCase()));
            }
            if (status === 'completed') {
                console.log("hello");
                filteredTasks = tasks.filter(task => task.isDone === true);
            }
            else if (status === 'pending') {
                filteredTasks = tasks.filter(task => task.isDone === false);
            }
            setTasks(filteredTasks);
        }
    }, [searchValue, status])
    return (
        <div className='w-2/3 mx-auto my-8'>
            {tasks.map((task) => (
                <Task key={task.title} task={task} />
            ))}
        </div>
    )
}

export default Tasks