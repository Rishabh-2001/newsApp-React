const About = () => {
    return ( 
        <div className="about-container">
             <h2>About :</h2>
             <p className="about-para ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum, excepturi cum quas magnam nisi, corporis eaque vel odit voluptatem fugit ullam exercitationem tempora iste sapiente nobis. Dolorem commodi voluptatem accusantium labore saepe. Possimus nisi necessitatibus aliquam porro veniam reprehenderit!
             </p>

             <h2>Why I Created: </h2>
             <p className="about-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia assumenda impedit voluptates, porro esse quibusdam atque ad nulla beatae veniam obcaecati excepturi accusamus quaerat? Tempora rem, deleniti nesciunt ea quia nemo.

             </p>
             <ul className="why about-para">
                <li className="reason ">lorem</li>
                <li className="reason ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus perspiciatis illum.</li>
                <li className="reason ">Lorem ipsum dolor sit amet.</li>
             </ul>
             
             <h2>Tech Stack Used: </h2>
             <ul className="texh-list about-para">
                <li className="tech">HTML, CSS, Javascript</li>
                <li className="tech">ReactJS</li>
                <li className="tech">Jquery</li>
                <li className="tech">News API</li>
             </ul>
        </div>
        
     );
}
 
export default About;