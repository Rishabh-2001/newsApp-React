import { Link } from 'react-router-dom';
import { useState } from 'react';
// const socket=require('socket.io')

const AsideFrame = (props) => {
    const asidedata=props.asidenews.articles;
    

    const [count,setCount]=useState(2);

    const getData=()=>{
        setCount(count+2);
    }
    return ( 
        <div className="aside-frame-container">
        
        {(asidedata.slice(0,count)).map((asidedoc)=>(
            <div className="frame-box"  key={asidedoc.title} >
                <img src={asidedoc.urlToImage} />
                <span className="author">{asidedoc.author}</span>
                <span className="date">{asidedoc.publishedAt}</span>
                <h3 className="title">{asidedoc.title}.</h3>
                <p className="frame-para">{asidedoc.content}</p>
                <a href={asidedoc.url} target="_blank" >
                     <button className="btn read-more-btn" >Read More</button>
                </a>
            </div>
            

        ))}
        <button className='btn load-more-btn' onClick={getData} >Load More</button>
           

        </div>
     );
}
 
export default AsideFrame;