import React, {Component} from 'react'
import withFetch from './withFetch'
class CommentsHOC extends Component{
  
  render(){
    const {data: comments, loading, error}=this.props;
    if(loading){
      return <div> Loading ..... </div>
    }
    if(error){
      return <div>error: {error}</div>
    }
    return (
      <div>

      <h2>Comments Emails</h2>
      {comments?.map((comment)=>{
        const {id, email}=comment;
        return <div key={id}>Comment email {email}</div>})}
      </div>
    )
  }

}

export default withFetch(
  CommentsHOC,
  "https://jsonplaceholder.typicode.com/comments"
)