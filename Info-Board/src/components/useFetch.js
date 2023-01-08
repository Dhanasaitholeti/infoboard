import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatedata , updateLoad , updaterr , updatefilteredlist } from "../redux/ducks/serverData";

const useFetch = (url) => {
    const dispatcher = useDispatch();

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            dispatcher(updatedata(data))
            dispatcher(updateLoad(false))
            dispatcher(updatefilteredlist(Object.keys(data)))
        })
        .catch((error)=>{
            dispatcher(updaterr(true))
        })
        return ()=>{
            dispatcher(updatedata(undefined))
            dispatcher(updateLoad(true))
        }
    },[url,dispatcher])
}
 
export default useFetch;