import axios from 'axios';
import React from 'react';
import './App.css';


class App extends React.Component{

state = {
  posts : []
}

componentDidMount()
{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response =>{
    this.setState({
      posts: response.data
    })
  })
  .catch(error => console.log(error))
}

 render(){
   let {posts} = this.state
   if(posts.length === 0){
     return <h1 style={{textAlign: 'center'}}>Loading...</h1>
   }
   else{
     return(
       <div className="container">
         <ul className="list-group">
           {posts.map(post=>
           <li style={{padding:'2px', border:'2px solid red', margin:'4px', width:'1000px'}} key={post.id} className="list-group-item">
             <b>Title :</b> {post.title}
             <br>
             </br>
             <b>Body :</b> {post.body}
           </li>)}
         </ul>
       </div>
     );
   }
 }
}

export default App;
