const CategoryPlate = (props) => {
    console.log(props,typeof(props));

    return ( 
        <div className="news-source-box">
             {(props.sources).map((newsdoc)=>(
            <div className="jsx" key={newsdoc.url}>
            <div className="news-image">
                <img src={newsdoc.urlToImage} />
            </div>

            <div className="news-content">
            <div className="intro-box">
                <div className="intro-left">
                    <h3 className="title"> { newsdoc.title } </h3>
                    <span className="author">{newsdoc.author }</span>
                </div>
                    {/* <span className="pubname">{newsdoc.name}</span> */}
                    <span className="date">{ newsdoc.publishedAt }</span>
            </div>
            
                   <p className="content">
                       {newsdoc.content}
                   </p>
                     <a href={newsdoc.url} target="_blank" >
                          <span className="read-more"  > Read more </span>
                     </a>

            </div>
            </div>
         

        ))}
            </div>

     );
}
 
export default CategoryPlate;
