import { useState } from "react"

export default function Counter (){
    const [count , setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count +1;
        setCount(newCount)

    }
   
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}