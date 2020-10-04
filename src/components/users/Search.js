import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/Alert/alertContext'

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

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
      alertContext.setAlert('Please enter something', 'light');
    }
    else
    {
      githubContext.searchUsers(text); // passing props up to app.js
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

      {githubContext.users.length > 0 &&  // && is like a one sided ternary
        (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        )}
    </div>
  )
}

export default Search
