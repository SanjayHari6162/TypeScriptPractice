import { useContext } from "react"
import { MainContext } from "./MainFile"

export const ChildFile = () =>{
    const value = useContext(MainContext)

    return(
        <>
            This is Child File
            <p>{value}</p>
        </>
    )
}