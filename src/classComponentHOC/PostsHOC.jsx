import React, {Component} from 'react'
import withFetch from './withFetch.jsx'
class PostsHOC extends Component{
  
  render(){
    const {data: posts, loading, error}=this.props;
    if(loading){
      return <div> Loading ..... </div>
    }
    if(error){
      return <div>error: {error}</div>
    }
    return (
      <div>
      <h1> Higher Order Component </h1>
      <h2>Posts</h2>
      {posts?.map((post)=>{
        const {id}=post;
        return <div>POST id: {id}</div>})}
      </div>
    )
  }

}

export default withFetch(
  PostsHOC,
  'https://jsonplaceholder.typicode.com/posts'
)