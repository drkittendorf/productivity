import "../../assets/css/style.css"
import React from 'react';
import {Link} from "react-router-dom"

// This component uses Function Component
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='divbar'>    
           NAVBAR ITEM HERE 
           <Link to={"/productivity"} className="divbar"> Home </Link>  
           <Link to={"/productivity/b"} className="divbar"> B </Link>  
           <Link to={"/productivity/c"} className="divbar"> C </Link>  
          <Link to={"/productivity/about"} className="divbar"> About </Link>  
        </div>
        
      </nav>
    );
  }

export default Navbar;