import { useEffect, useState } from "react";
import { Transaction } from "../Types";


const useFetch = (input:string, isInvalid:boolean) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<any>(undefined);
    useEffect(()=>{
        if (isInvalid) return 
        setLoading(true)
        setError(false)
        fetch(input,).then(res=>res.json()).then(res=>{
            setLoading(false)
            setData(res)
        }).catch(err=> setError(err))
        setLoading(false)
    }, [input, isInvalid])
    
    return [data, loading, error]

}

export default useFetch;