
import './App.css'
import Counter from './Counter';

function App() {

  function handleClick(){
    alert ('button clicked');
  }
  const handleClick2 =() =>{
    alert('button clicked 2')
  }
  const addToFive =(num) =>{
    alert(num+ 5);
  }
 

  return (
    <>
      
      <h1>React Core Concepts 2</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click2</button>
     <button onClick={() =>{alert('third clicked')}}>third</button>
    <button onClick={()=>{alert('fourth clicked')}}>Fourth</button>
    {/* ve */}
    <button onClick={()=> addToFive(3)}>Five</button>
    </>
  )
}

export default App
