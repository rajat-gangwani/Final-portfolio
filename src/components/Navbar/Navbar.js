import React, { useState } from 'react'
import logo from "../../images/portfolio-logo.png"
import menu from "../../images/menu-icon.png"
import cancel from "../../images/cancel-sign.png"

import "./navbarstyle.css"
function Navbar() {
    const [ismenu,setisMenu] = useState(false)

  return (
   <nav className='navbar' >
       <div className='left-navbar' >
           <a href='/' >
           <img src={logo} alt="portfolio-logo"></img>
           </a>
       </div>
       <ul className={ismenu ? "right-navbar expanded" : 'right-navbar'}>

           <li id="nav-li" >
               <a id="nav-a" href="/" >HOME</a>
            
           </li>
           <li id="nav-li">
            <a id="nav-a" href="/projects" >PROJECTS</a>   
           </li>
           <li id="nav-li">
               <a id="nav-a" href="/blogs" >
            BLOGS
            </a>
           </li>
           <li id="nav-li">
               <a id="nav-a" href="/resume" >
            RESUME
            </a>
           </li>
       </ul>
       {ismenu ? <button onClick={() => setisMenu(!ismenu)} className='menu-btn' > <img alt="cancel" class="menu" src={cancel}/>
       </button> : <button onClick={() => setisMenu(!ismenu)} className='menu-btn' > <img alt="menu" class="menu" src={menu} />
       </button>}
       
       
   </nav>

  )
}

export default Navbar;