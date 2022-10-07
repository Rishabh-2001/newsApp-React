import CategoryPlate from "./CategoryPlate";

import { useLocation} from "react-router-dom";

import {Link } from "react-router-dom";
import { useState } from "react";

const Category = () => {
    const { state } = useLocation();  
   const {resdata} = state;
   const src=resdata;
//    console.log("src data: ",src,typeof(src));


    return ( 
        <div className="category-container">
            <h4>Read here: </h4>
            {src && <CategoryPlate sources={src} /> }
        </div>
     );
}
 
export default Category
   