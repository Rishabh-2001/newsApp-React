const Contact = () => {
    return ( 
        <div className="contact-container">
            <h2>Contact me: </h2>
            <ul className="icons">
                <li className="icon">
                    <img src={require('./twitter.png')}  style={{height:'80px',width:"80px"}}  alt="" />
                </li>
                <li className="icon">
                    <img src={require('./instagram.png')}  style={{height:'80px',width:"80px"}} alt="" />
                </li>
                <li className="icon">
                    <img src={require('./gmail.png')} style={{height:'80px',width:"80px"}}  alt="" />
                </li>
                <li className="icon"></li>
            </ul>
        </div>
     );
}
 
export default Contact;