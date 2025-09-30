import { useEffect, useState } from "react"


const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [loading,setloading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setloading(true)
                const response = await fetch(url);
                if(!response){
                    return new Error("Failed to fetch")
                }
                const result = await response.json();
                setData(result)
            }catch(err){
                setError(err.message)
            }finally{
                setloading(false)
            }
        }
        fetchData();
    },[url])
    return {data,loading,error }
}

export default useFetch;