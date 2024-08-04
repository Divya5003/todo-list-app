import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:3000/api/read-data');
            setTasks(response.data);
        }
        fetchTasks();
    }, [])
    return (
        <div className='w-2/3 mx-auto my-8'>
            {tasks.map((task) => (
                <Task key={task.title} task={task} />
            ))}
        </div>
    )
}

export default Tasks