import { useState } from "react"

export default function Counter (){
    const abc = useState(0);
    console.log(abc)
    return (
        <div>
            <h3>Counter:</h3>
        </div>
    )
}