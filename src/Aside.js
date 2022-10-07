import AsideFrame from "./AsideFrame";
import UseFetch from './UseFetch';
const Aside = () => {
    const { data:asidenews, isPending, error} = UseFetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3a32b7a0995a4210844a7c4a360aeab6');

    return ( 

        <div className="aside-container">
            <h2>Featured Post: </h2>
            { error && <div> {error} </div> }
             { isPending && <div>Loading. . .</div> }
             {asidenews && <AsideFrame asidenews={asidenews}></AsideFrame> }
        </div>
      
       
     );
}
 
export default Aside;