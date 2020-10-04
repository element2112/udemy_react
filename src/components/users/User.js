import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {

  componentDidMount()
  {
    this.props.getUser(this.props.match.params.login) // route/:login
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }

  render() {

    const { name, 
            avatar_url, 
            location, 
            bio, 
            blog, 
            login,
            html_url, 
            followers, 
            following, 
            public_repos, 
            public_gists, 
            company,
            hireable 
          } = this.props.user;

    const { loading } = this.props;

    if (loading)
      return <Spinner />

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {' '}
        {hireable ? (<i className="fas fa-check text-success" />) : 
          (<i className="fas fa-times-circle text-danger" />)
        }

        <div class="card grid-2">
          <div class="all-center">
            <img src={avatar_url} className="round-mg" style={{ width: "150px" }} alt="" />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && <Fragment><h3>Bio</h3><p>{bio}</p></Fragment>}
            <a href={html_url} className="btn btn-dark my-11">Visit Github Profile</a>
            <ul>
              <li>
                {login && <Fragment><strong>Username: </strong>{login}</Fragment>}
              </li>
              <li>
                {company && <Fragment><strong>Company: </strong>{company}</Fragment>}
              </li>
              <li>
                {blog && <Fragment><strong>Website: </strong>{blog}</Fragment>}
              </li>
            </ul>
          </div>
        </div>

        <div class="card text-center">
          <div class="badge badge-primary">Followers: {followers}</div>
          <div class="badge badge-success">Follwing: {following}</div>
          <div class="badge badge-light">Public Repos: {public_repos}</div>
          <div class="badge badge-dark">Public: {public_gists}</div>
        </div>        
      </Fragment>
    )
  }
}

export default User
