import React from 'react';

function Search(props) {

    return (
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            className="btn"
            placeholder="18) Insert Username.."
        />
    )
}

export default Search;