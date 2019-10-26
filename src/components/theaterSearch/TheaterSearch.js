import React, {Component, useState} from 'react'


function TheaterSearch(props) {
    const [searchInput, setSearchInput] = useState('')
    return (
        <div>
            <form>
                <h3>Search Theaters and shit</h3>
                <input name='searchInput' value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search for theater'/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default TheaterSearch