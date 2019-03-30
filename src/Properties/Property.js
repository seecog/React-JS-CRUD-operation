import React from 'react';
import './Property.css';
const Property = (props)=>{
    return (
        <div className="property">
<h2>{props.name}</h2>
<p>
Cost : {props.cost}
</p>
<p>
<button onClick={props.click}>Fire</button>
    </p>
        </div>
    )
}

export default Property;