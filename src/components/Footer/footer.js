import "./footerstyle.css"
import devicon from "../../images/dev-icon.png"
import linkedinicon from "../../images/linkedin-icon.png"
import hackerrankicon from "../../images/hackerrank-icon.png"

const Footer = () =>{
    return(
      <footer  >
    <div className="footer" >
    <ul className="mid-footer-ul" >
    
           <li id="li" >
               <a  rel="noreferrer" target="_blank"  href="https://www.hackerrank.com/rajatgangwani99" >
              <img alt="hackerrank-icon" src={hackerrankicon} />
               </a>
           </li>
           <li id="li" >
            <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rajat-gangwani-bba1b0179/" >
            <img alt="linkedin-icon"   src={linkedinicon} />  
            </a>   
           </li>
           <li id="li" >
               <a  rel="noreferrer" target="_blank"  href="https://dev.to/rajatgangwani" >
            <img alt="dev-icon" src={devicon}/>
            </a>
           </li>
       </ul>
       </div>
       
      </footer>
    )
}

export default Footer;