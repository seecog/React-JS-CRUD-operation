import axios from 'axios';
import React,{Component} from 'react';
class Posts extends Component{

constructor(){
    super();
    this.state = {
        posts : []
    }
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log('The list of posts are ',res);
this.setState({
    posts : res.data
})
    })
    .catch((err)=>{
console.log('The error is ',err);
    })
}

render(){
    return (
        <div>
<ul>
{
    this.state.posts.map((post,i)=>{
        return (
            <li key={i}>
{i} => {post.title}
                </li>
        )
    })
}
</ul>    

        </div>
    )
}

}

export default Posts;