
type PropesType={
    name:string;
    nameList:{
        firstName:string;
        lastName:string;
    }[]
    status:"Online" | "Offline";
}



export const Props = ({name, nameList, status}:PropesType) =>{
    return(
        <>
            <h2 style={{textAlign:"center"}}> Hi {name}! welcome to the Typescript Practice...</h2>
            
            <h4>List of the Users</h4>
            {nameList.map((item)=>(
                <p key={item.firstName}>{item.firstName} {item.lastName} {`( ${status} )`}</p>
            ))}


        </>
    )
}