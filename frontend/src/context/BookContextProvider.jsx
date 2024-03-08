import React,{useEffect,useState} from "react";
import BookContext from "./BookContext";

const UserContextProvider = ({children}) => {
    useEffect(()=>{
        getbook()
    },[])
    const[Bookdata,setBookData]=useState([])
    const getbook =async ()=>{
        const data = await fetch(`http://127.0.0.1:8000/getbook`)
        const res = await data.json()
        
        setBookData(res)
    }
    return(
        <BookContext.Provider value={{Bookdata, setBookData}}>
        {children}
        </BookContext.Provider>
    )
}

export default UserContextProvider