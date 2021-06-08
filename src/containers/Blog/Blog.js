import React from 'react'
import {Route,Link} from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from '../../containers/Blog/NewPost/NewPost'
import './Blog.css'

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/NewPost',
                  search: '?sort=post'
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/NewPost" exact component={NewPost} />
       
      </div>
    )
  }
}

export default Blog
