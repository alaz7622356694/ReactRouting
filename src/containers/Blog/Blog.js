import React from 'react'
import {Route,Link ,Switch , Redirect} from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from '../../containers/Blog/NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'
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
       <Switch>
       <Route path="/" component={Posts} />
        <Route path="/NewPost" component={NewPost} />
        <Route path="/test" render={()=><h2>Testing</h2>} />
        <Route path="/:id" exact component={FullPost} />
        <Redirect from="/test" to="/"/>
       </Switch>
      </div>
    )
  }
}

export default Blog
