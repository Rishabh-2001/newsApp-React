
import { useLocation} from "react-router-dom";

import {Link } from "react-router-dom";
import News from "./News";


const SearchResults = () => {
    const { state } = useLocation();

    console.log(state, typeof state);
    const {searchData} = state;
    // console.log(searchData.articles, typeof searchData);
    const news=searchData;
    // console.log(myData,typeof myData);
    
//     const result = Array.isArray(searchData) ? searchData.map(element => element + 1) : [];


//    console.log(result);


    // console.log({state});
    // console.log(itemId, typeof itemId);
    // console.log(data,typeof data);

    return ( 
        <div className="news-box">
         <h2>Search Results: </h2>
         {news && <News news={news}></News> }
    </div>
   )
          
           
       
    
}
 
export default SearchResults;