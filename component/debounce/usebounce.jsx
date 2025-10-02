import { useEffect, useState } from "react"

const useBounce = (value,delay = 500) =>{
    const [debounce,setDebounce] = useState("");
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounce(value)
        },delay);
        return () => clearInterval(handler);
    },[value,delay])
    return debounce;
}

export default useBounce;
