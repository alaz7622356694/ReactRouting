import React from 'react'
import {Route,Link ,Switch} from 'react-router-dom'
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
       <Route path="/" exact component={Posts} />
        <Route path="/NewPost" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
        <Route render={()=><h2 style={{textAlign:'center'}}>Not found</h2>} />
        
       </Switch>
      </div>
    )
  }
}

export default Blog
