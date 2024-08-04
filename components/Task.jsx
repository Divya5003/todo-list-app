import { Icon } from '@iconify/react'
import axios from 'axios';
import React, { useState } from 'react'
import Modal from './Modal';

const Task = ({ task }) => {
    const [showModal, setShowModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [status, setStatus] = useState(task.isDone ? 'Completed' : 'Pending');

    const markAsDone = async () => {
        const response = await axios.put('http://localhost:3000/api/update-data', {...task, isDone: !task.isDone});
        console.log(response);
        setStatus(status === "Completed" ? "Pending" : "Completed");
    }

    const updateTask = async (details) => {
        var updatedTask = {...details, id: task.id, isDone: task.isDone,  timestamp: new Date().toLocaleString()};
        const response = await axios.put('http://localhost:3000/api/update-data', updatedTask);
        console.log(response);
        location.reload();
    }

    return (
        <div className='bg-white shadow-lg p-4 m-4 rounded-md cursor-pointer'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                <div className='flex items-center' onClick={markAsDone}>
                    {status === "Completed" ? <Icon className='text-green-500' icon="lets-icons:done-ring-round" /> : <Icon className='text-yellow-500' icon="fa:circle-thin" />}
                </div>
                    <h2 className='font-semibold'>{task.title}</h2>
                </div>
                <div className='flex items-center gap-4'>
                    <Icon onClick={() => setShowModal(true)} icon="fluent:edit-32-filled" />
                    <Icon onClick={() => setShowDetails(!showDetails)} className={showDetails && 'rotate-180'} width={20} icon="iconamoon:arrow-down-2-bold" />
                </div>
            </div>
            {showDetails && (
                <div className='mt-4'>
                    <hr />
                    <p><span className='font-semibold'>Description:</span> {task.description}</p>
                    <p><span className='font-semibold'>Status:</span> {status}</p>
                    <p><span className='font-semibold'>Timestamp:</span> {task.timestamp}</p>
                </div>
            )}
            {showModal &&
                <Modal
                    handleSubmit={updateTask}
                    closeModal={() => setShowModal(false)}
                    initialTitle={task.title}
                    initialDesc={task.description}
                />
            }
        </div>
    )
}

export default Task