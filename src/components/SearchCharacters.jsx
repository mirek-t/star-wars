import React from 'react';

function SearchCharacters() {
    return (
        <input
            type="search"
            placeholder="Search here"
            value={''}
            onChange={(event) => console.log(event.target.value)}
        />
    );
}

export default SearchCharacters;