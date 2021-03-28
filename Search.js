import React from 'react';

const Search = ({inputVal, setInputval, handleSearch}) => {

    return(
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search for an image"
                autoFocus
                value={inputVal}
                onChange={(e) => setInputval(e.target.value)} // how we're going to update our input       
            />
            <button type="submit">Search</button>
        </form>
    )
};

export default Search;