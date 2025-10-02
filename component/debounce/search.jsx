import { useEffect, useState } from "react"
import useBounce from "./usebounce";

const Search = () =>{
    const [query,setQuery] = useState("");
    const debounceQuery = useBounce(query, 500);
    useEffect(()=>{
        if(debounceQuery){
            console.log("apl call debound")
        }
    },[debounceQuery])

    return(
        <div>
            <input value={query} type="text" placeholder="Enter some thing..." onChange={(e)=> setQuery(e.target.value)}/>
        </div>
    )
}

export default Search;