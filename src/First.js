import React,{Component} from 'react';
import './First.css';

class First extends Component{

constructor(){
    super();
    this.state = {
        name : 'Mohan',
        age : 21,
        sal : 100
    }
}

render(){
    return (
        <div className="myclass">
<h2>{this.state.name}</h2>
<p>
Age is {this.state.age}
    </p>
    <p>
Salary is {this.state.sal}
        </p>
        </div>
        
    )
}

}

export default First;