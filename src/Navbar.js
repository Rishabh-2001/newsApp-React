import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import News from './News';
import {useNavigate} from "react-router-dom";
import MyContext from './MyContext';
import axios from 'axios';
// import {MyContext , MyContextProvider } from './MyContext';

// FOR LATEST NEWS:    ----   https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3a32b7a0995a4210844a7c4a360aeab6
//FOR CATEGORY WISE: ----  https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=3a32b7a0995a4210844a7c4a360aeab6 ;
const Navbar = () => {
  const [searchData,setSearchData] =useState();
  const [navData,setNavData]=useState();
  const navigate = useNavigate();
  
  const [name, setName] = useState();


  const handleInput = event => {
    setName(event.target.value);
  }; 

  const handleSubmit= (event)=>{
    event.preventDefault();
    
    generateUrl();
    
  }

     const generateUrl = async () => {
        const partOne='https://newsapi.org/v2/everything?q=';
        const partTwo='&apiKey=3a32b7a0995a4210844a7c4a360aeab6';
       
        const final=partOne+name+partTwo;


        await axios.get(final)
        .then(res => {
          // console.log(res.data);
          setSearchData(res.data);
            // console.log(searchData);
          navigate('/searchresult',{state:{searchData}})
        })
        .catch(err=>console.log(err.message))


     }
     async function getKey(e)
     {
        const searchKey=e.target.textContent;
        console.log(searchKey);
        if(searchKey==='Latest News')
        {
             const searchOrigin='https://newsapi.org/v2/top-headlines?country=in&apiKey=3a32b7a0995a4210844a7c4a360aeab6';
            await axios.get(searchOrigin)
            .then(response=>{
               const resdata=response.data.articles;
               console.log(resdata);
              navigate('/category',{state:{resdata}})

            })
            .catch(err=>{
              console.log(err.message);
            })
              
                   
        }
        else{
          // https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3a32b7a0995a4210844a7c4a360aeab6
             const first='https://newsapi.org/v2/top-headlines?country=in&category='+searchKey+'&apiKey=3a32b7a0995a4210844a7c4a360aeab6';
          
              await axios.get(first)
              .then(response=>{
                const resdata=response.data.articles;
                console.log(resdata);
               navigate('/category',{state:{resdata}})

              })
              .catch(err=>{
                console.log(err.message);
              })
        }




     }
     
    
    return ( 
          <div className="navbar">
          <div className="row-one">
            <div className="name-tag">
              <Link to="/">
              <h2 className="name">New-s</h2>
              </Link>
              <span className="tagline">Around the world in a page..</span>
            </div>

             <div className="search-box">
              <form className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Keyword' onChange={handleInput} />
                <button type='submit' className='submit-btn'>Search</button>
              </form>

             </div>

            <ul className="links">
              <Link to="/">
                <li className="link">Home</li>
              </Link>
                <Link to="/About">
                <li className="link">About</li>
                </Link>
                <Link to="/contact">
                <li className="link last">Contact</li>
                </Link>
            </ul>

        </div>

       
          <ul className="categories">
            <li className="category" onClick={getKey} >Latest News</li>
            <li className="category" onClick={getKey}>Entertainment</li>
            <li className="category" onClick={ getKey}>Sports</li>
            <li className="category" onClick={ getKey}>Science</li>
            <li className="category" onClick={ getKey}>Business</li>
            <li className="category last" onClick={ getKey}>Health</li>

          </ul>
      

        </div>



     );
   
}
 
export default Navbar;
