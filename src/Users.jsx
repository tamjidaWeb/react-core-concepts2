import { useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([])
    const abc = () =>{

    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
      
        return (
        <div>

        </div>
    )
}

// 1. declare a state to hold the data
//useEffect with call back and dependency array