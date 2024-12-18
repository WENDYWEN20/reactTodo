import React, {Component} from 'react'
export default class ClassPosts extends Component{
  state={
    post: [],
    loading: false,
    error: null,
  }
  //Mounting(componentDidMount)----Updating(componentDidUpdate)----Unmounting(componentWillUnmount)
  async componentDidMount(){
    this.setState({loading: true})
    // Mounting: change loading to true when componentDidMount
    try{
      const res=await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts=await res.json()
      this.setState({posts})
    }catch(error){
      this.setState({error: error.message})
    }finally{
      this.setState({loading:false})
          // change loading to false when componentDidMount finishes
    }
  }
  render(){
    const {posts, loading, error}=this.state;
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
