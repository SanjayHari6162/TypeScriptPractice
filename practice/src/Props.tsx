
type PropesType={
    name:string;
}

export const Props = ({name}:PropesType) =>{
    return(
        <>
            <h2 style={{textAlign:"center"}}> Hi {name}! welcome to the Typescript Practice...</h2>
            <h4>List of the Users</h4>
        </>
    )
}