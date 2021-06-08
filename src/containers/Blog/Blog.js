import React from 'react'
import {Route} from 'react-router-dom'
import Posts from './Posts/Posts'

import './Blog.css'

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={()=><h2>Home</h2>}/>
        <Route path="/" render={()=><h2>Home2</h2>}/>
      </div>
    )
  }
}

export default Blog
