
import { useState } from "react"

const App = () => {
 const[todo, settodo] = useState('')
 const [todos, settodos] = useState([])

 function Adding () {
 settodos([...todos, todo])
  settodo('')
 }
 function deleteTodo(indexToDelete) {
  settodos(todos.filter((_, index) => index !== indexToDelete))
}



 let elements = todos.map((todo,index)=> {
  return (
    <div key ={index} className=" flex gap-7">
      <span>{todo}</span>
      <button className='bg-red-600 px-4 py-4 text-white pb-4' onClick={deleteTodo}>Delete</button>
    </div>
  )
 })
  return (
    <>
      <div className="flex flex-col gap-3">
        <div  className="flex gap-6">
       <input
       
       name= 'todo'
       type='text'
       value ={todo}
       onChange = {(e)=> settodo(e.target.value)}
       className='px-8 py-3 border border-black pb-3'>
       </input>
       <button className='bg-blue-700 px-4 py-4 text-white pb-4' onClick={Adding}>Add</button>
       </div>

      
       <h1 className="flex flex-col gap-6">{elements}</h1>
       </div>
    </>
  )
}

export default App



