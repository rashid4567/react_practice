import useFetch from "./useFetch"

const FetchApp = () =>{
    const {data, loading, error} = useFetch();

    if(loading)return <h3>Loading...</h3>
    if(error) return <h3 style={{color : "red"}}>Error : {error}</h3>

    return(
        <div>
            <h3>Custom hooks</h3>
            <ul>
                {data.map((user)=>(
                    <li key={user.id}>
                        {user.name}{""}{user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default FetchApp;