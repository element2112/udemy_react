import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

  const [text, setText] = useState('');

  const onChange = (e) => {

    setText(e.target.value) 
    // [e.target.name] makes the name of the element the key, that way we don't need
    // a separate onchage for each component we are getting text from
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '')
    {
      setAlert('Please enter something', 'light');
    }
    else
    {
      searchUsers(text); // passing props up to app.js
      setText('');
    }

  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" 
        name="text" 
        placeholder="Search Users..."value={text}
        onChange={onChange}/>

        <input 
        type="submit" 
        value="Search" 
        className="btn btn-dark btn-block"/>
      </form>

      {showClear &&  // && is like a one sided ternary
        (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
