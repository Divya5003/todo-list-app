import React from 'react'

const Filter = ({ handleFilter }) => {
    return (
        <select
            className='p-2 mt-5  border border-pink-700 focus:outline-none rounded-md'
            onChange={(e) => {
                console.log(e.target.value);
                handleFilter(e.target.value);
            }}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>
    )
}

export default Filter