import React from 'react';


const Addemp = (props)=>{

return (
    <div>
<p>
Name : <input name="name" onChange={props.change} />
</p>
<p>
Age : <input name="age" onChange = {props.changeage} />
</p>
<p>
Salary : <input name="salary" onChange={props.changesal} />
</p>
<p>
<button onClick={props.add}>Add Employee</button>
    </p>
        </div>
)

}

export default Addemp;