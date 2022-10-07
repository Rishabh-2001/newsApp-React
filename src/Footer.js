const Footer = () => {
    return ( 
        <div className="footer-container">
        <div className="made-with">
             <span className="footer-tag">Made With </span>
             <span className='heart'><img src={require('./heart.png')}  style={{height:'50px',width:"50px"}}  alt="" /></span>
             <span>and</span>

            <span className='brain'>
            <img src={require('./brainstorm.png')}  style={{height:'50px',width:"50px"}}  alt="" />
            </span>
            </div>
             <p>Copyright &copy; 2022</p>
        </div>
     );
}
 
export default Footer;