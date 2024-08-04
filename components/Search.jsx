import React from 'react'

const Search = ({ handleSearch }) => {
    return (
        <div className='w-40'>
            <label
                htmlFor='title'
                className='text-md text-pink-700'
            >
                Search task
            </label>
            <input
                id='title'
                type='text'
                className='rounded-md px-6 py-1 w-full text-lg border border-pink-700 focus:outline-none text-pink-700'
                placeholder=''
                onChange={(e) => handleSearch(e.target.value)}

            />
        </div>
    )
}

export default Search