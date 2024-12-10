import { useState } from "react"

type user={
    name:string
    email:string
}

export const UseState = () =>{
    const [isLogin, setIsLogin]=useState(false)
    const [ isLoggedin, setIsLoggedin]=useState<user | null>(null)
    
    const handleLogin = () =>{
        setIsLogin(true)
    }
    const handleLogout = () =>{
        setIsLogin(false)
    }

    const handleLogedin = () =>{
        setIsLoggedin({
            name:"Hari",
            email:"hari@example.com"
        })
    }
    const handleLoggdout = () =>{
        setIsLoggedin(null)
    }

    return(
        <>
            <hr />
            <h2>Use State in Typescript</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p> The User is {isLogin? "Loggedin" : "Loggedout"}</p>
            
            <hr />

            <button onClick={handleLogedin}>Login</button>
            <button onClick={handleLoggdout}>Logout</button>
            <p> The User is {isLoggedin? "Loggedin" : "Loggedout"}</p>
            {isLoggedin ?(<><h3>User Name:{isLoggedin?.name}</h3>
            <h3>User E-mail:{isLoggedin?.email}</h3></>):null}

        </>
    )
}