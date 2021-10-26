
function Country({name, flag, id}){

    return (
        <div key={id}>
            <h1>{name}</h1>
            <img src={flag} alt="imagen"></img>
    </div>
    )
}

export default Country