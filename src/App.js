import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Aside from './Aside';
import Footer from './Footer';
import SearchResults from './SearchResults';
import { useContext,useState, useEffect } from 'react';
import News from './News';
import Category from './Category';
 

// key=3a32b7a0995a4210844a7c4a360aeab6
function App() {
  const [Data,setData] = useState();
  const [searchData,setSearchData] = useState(null);

  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="home-content">
      <Routes>
      <Route exact path='/' element={<Home />} />

      <Route exact path='/about' element={<About />} />
   
      <Route exact path='/searchresult' element={<SearchResults />}/>
    
      <Route exact path='/contact' element={<Contact />} />

      <Route exact path='/category' element={<Category/>}/>
     {/* */}
      </Routes>
      </div>
      <Footer></Footer>
      </div>
    </Router>

      
  );
  

}

export default App;
