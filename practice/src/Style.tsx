type Cssprops = {
    css:React.CSSProperties
}

export const Style:React.FC<Cssprops> = ({css}) => {
    return(
        <>
            <div style={css}>
                red
            </div>
        </>
    )
}