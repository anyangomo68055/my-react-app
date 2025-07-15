import { useState, useEffect } from "react";

const useFetch = (url)=>{
   const [data, setData] = useState(null)
   const [isPending, setIspending]= useState(true)
   const [error, setError] = useState(null)

   useEffect(()=>{
      setTimeout(() => {
        fetch(url)
        .then((res) => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource")
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIspending(false)
          setError(null)
        })
        .catch((err) => {
          setIspending(false)
          setError(err.message)
        })
      }, 2000)

   }, [url])

   return { data, isPending, error }
}
export default useFetch;
