import React, { useReducer } from "react"

// const reducer = (state:number,action:number|string) =>{
//     switch(action.type<string>){
//         case 'increment':
//            return state + 1; 
        
//         case 'decrement':
//             return state - 1;
        
        

//         default :
//             return state;
//     }

// }
const reducer = (todo,action)=>{
    switch(action.type){
        case "addTask" :
            return[...todo,{id:todo.length+1, name:action.payload}]
    }
}

const initialValue=[]

export const UseReducers = () =>{

    // const initialValue=0;
    
    // const [state,dispatch]=useReducer(reducer, initialValue)
   
    // const handleIncrement = () =>{
    //     dispatch({type:"increment"})
    // }

    // const handleDecrement = () =>{
    //     dispatch({type:"decrement"})
    // }

    //todo app useReducer
    const[todo, dispatch]=useReducer(reducer, initialValue)
    
    const handleInput = (e) =>{
        if(e.key=="Enter"){
            dispatch({type:"addTask", payload:e.target.value})
        }
        
    }
    
    return (
        <>
            <hr />
            {/* <h1 style={{textAlign:"center"}}>UseReducer</h1>
            <h2>Count is :{state}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button> */}
            <hr />
            <h3 >Todo App</h3>
            <label htmlFor="task">Enter the task</label>
            <input type="text" id="task"onKeyDown={(e)=>{handleInput(e)}}/>
            <button onClick={handletask}>Add</button>
            
            <ul>
            {todo.map((item)=>(<li key={item.id}>{item.name}</li>))}
            </ul>

        </>
    )

}