import React from 'react'
import {Link} from 'react-router-dom'

const SearchResult = (props) => {
    debugger
    return (
    <li>
       <Link to ={`/${props.result.id}`}>{props.result.name}</Link>
    </li>)  
}

export default SearchResult