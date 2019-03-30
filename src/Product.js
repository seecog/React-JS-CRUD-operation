import React,{Component} from 'react';

class Product extends Component{

constructor(){
    super();
    this.state = {
        name : "Mango",
        cost : 150,
        pic : "https://www.titosvodka.com/uploads/recipes/_auto1000/ingredient-mango.jpg"
    }
}

render(){
    return (
        <div>
<h2>{this.state.name}</h2>
<h4>Cost : {this.state.cost}</h4>
<p>
<img src={this.state.pic} width="100" height="100"/>
</p>
        </div>
    )
}

}

export default Product;