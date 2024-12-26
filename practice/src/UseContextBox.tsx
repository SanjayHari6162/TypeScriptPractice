import { useContext, useState } from "react"
import { StyleContext } from "./UseContext"


export const UseContextBox = () =>{
    const {BoxStylePrimary, BoxStyleSecondary}=useContext(StyleContext)
    const [color, setColor] = useState(false)
    const handleColor = () =>{
       setColor(!color)
    }
        
    

    return(
        <>
            <p>Click the button to change color</p>
            <div className="box" style={color? BoxStylePrimary : BoxStyleSecondary}> BOX</div>
            <button onClick={handleColor}>Change</button>
        </>
    )
}