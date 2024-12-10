
type PropesType={
    name:string;
    nameList:{
        firstName:string;
        lastName:string;
    }[]
    status:"Online" | "Offline";
    fetching:"sucesses" | 'unsucesses';
}



export const Props = ({name, nameList, status,fetching}:PropesType) =>{

    let dataStatus;
    if (fetching === 'sucesses' ){
        dataStatus="The Data Fetching is Sucessesfull"
    }else if(fetching === 'unsucesses'){
        dataStatus ="The Data Fetching is Unsucessesfull"
    }else{
        dataStatus="Loading..."
    }


    return(
        <>
            <h2 style={{textAlign:"center"}}> Hi {name}! welcome to the Typescript Practice...</h2>
            
            <h4>List of the Users</h4>
            {nameList.map((item)=>(
                <p key={item.firstName}>{item.firstName} {item.lastName} {`( ${status} )`}</p>
            ))}

            <h3> Status={dataStatus}</h3>

        </>
    )
}