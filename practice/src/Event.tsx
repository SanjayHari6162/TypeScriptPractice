import { useState } from "react";


export const Event:React.FC= () =>{
    const handleOnClick = ()=>{
        console.log('The button is clicked')
        alert("button is clicked")
    }
    
    const [data,setData]=useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            setData(e.target.value)
       

    }

    return(
        <>
            <button onClick={handleOnClick}>Click</button><br/>
            <input 
                value={data}
                onChange={(e)=>handleChange(e)}
            />
            <p>{data}</p>
        </>
    )
}