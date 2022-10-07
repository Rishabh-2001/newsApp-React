import News from "./News";
import Aside from "./Aside";
import UseFetch from './UseFetch';


const Home = ({newData}) => {

    const { data:news, isPending, error} = UseFetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3a32b7a0995a4210844a7c4a360aeab6');
    return ( 
         
        <div className="home-page-container">
              <div className="home-page">
                <h2>Recent News:</h2>
                { error && <div> {error} </div> }
             { isPending && <div>Loading. . .</div> }
           
               {news && <News news={news}></News> }
               
              </div>
            
               <Aside></Aside>
            
        </div>
       
     );
}
 
export default Home;