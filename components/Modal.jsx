import React, { useState } from 'react'

const Modal = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        closeModal();
    }
    return (
        <div className="fixed w-full h-full bg-black bg-opacity-60 flex z-50 items-center justify-center top-0 left-0">
            <div className="w-1/3 bg-white rounded-md p-10">
                <h4 className='text-lg text-pink-700 font-semibold w-fit'>
                    Create a task
                </h4>
                <br />
                <form onSubmit={handleFormSubmit}>
                    <div className='relative'>
                        <input
                            id='title'
                            type='text'
                            className='rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer'
                            value={title}
                            placeholder=''
                            onChange={(e) => { setTitle(e.target.value) }}

                        />
                        <label
                            htmlFor='code'
                            className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                        >
                            Enter Title
                        </label>
                    </div>
                    <br />
                    <div className='relative'>
                        <textarea
                            id='description'
                            type='text'
                            className='rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer'
                            value={description}
                            placeholder=''
                            onChange={(e) => { setDescription(e.target.value) }}

                        />
                        <label
                            htmlFor='description'
                            className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                        >
                            Enter description
                        </label>
                    </div>
                    <br />
                    <button
                        className='bg-pink-700 text-white rounded-md px-6 py-2 w-full text-lg focus:outline-none'
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;