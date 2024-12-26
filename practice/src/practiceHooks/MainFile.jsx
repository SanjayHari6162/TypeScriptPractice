import { createContext } from "react"
import { ParentFile } from "./ParentFile"
export const MainContext =createContext()
export const MainFile = () =>{
   
    const data = "This is a data from main file"

    return(
        <>
        <MainContext.Provider value={data}>
        This is Main File <br />
        < ParentFile />

        </MainContext.Provider>
            
        </>
    )
}