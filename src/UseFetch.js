//custom hooks needs to be start with word use ...
//hooks are used to create a logic at one place and use it at other files hwile importing it.
import { useState,useEffect } from 'react';




// only when isPending is true i want to show the loadfing page



const UseFetch=(url)=>{

    const [data,setData]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
       
        const abortCont=new AbortController();
        let req = new Request(url);




    async function fetchNews(){
        const res=await fetch(req,{ signal: abortCont.signal})
                        if(!res.ok)
                        {
                            throw Error("Couldn't fetch data");
                        }
                        // console.log(res);
                        const news=await res.json();
                   
                        
                        setData(news);
                        // console.log(news);
                        setIsPending(false);
                        setError(null);
                        return ()=>abortCont.abort();


    }
    fetchNews().catch(err=>{
        if(err.name==='AbortError')
               {
                  console.log('Getch Aborted');
               }
             else{
                  setIsPending(false);
                  setError(err.message);
             }

    })
      //this point stop the fetching and cleanup fun ...by using the abort function

        // console.log(name);
        //this is used when we make any changes and whole thing renders again.....useEffect is used then
     },[])
    // console.log(data);
     return { data, isPending, error}
}


export default UseFetch;

