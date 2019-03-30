import React,{Component} from 'react';
import Property from './Property';
class Properties extends Component{

    constructor(){
        super();
        
    }

    getRecord=(arg)=>{
        alert('Hello world '+arg);
    }

    render(){
        return (
            <div>
<Property click={this.getRecord.bind(this,'Antelena')} name="Antelena" cost="12000" />
<Property click={this.getRecord.bind(this,'Mannat')} name="Mannat" cost="100"/>
<Property click={this.getRecord.bind(this,'Jalsa')} name="Jalsa" cost="85"/>
            </div>
        )
    }

}

export default Properties;