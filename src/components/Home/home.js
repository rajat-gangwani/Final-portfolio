import "./homestyle.css"
import homeImg from "../../images/home-img.svg"
import resume from "../../images/rajat-resume.pdf#toolbar=0"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        
        <main className="home" >
            
            <div className="home-right" >
                <img src={homeImg} className="home-img" alt="home-img" />
            </div>
            <div className="home-left">
                <div className="home-leftcomponent">
        <h1 className="heading-name" >
            RAJAT GANGWANI
        </h1>
        <h2>Full Stack Developer</h2>
        
        <p className="description" >
            I am a engineer by choice and  a tech-enthusiat by passion.
        Curiosity made me do this. I love reading books, playing with my pet and learning new tech.
        <br/>
        <br/>

        <div className="space" >
        <strong  >TECH STACK:</strong> Html/Css, Javascript, React JS, Express JS, MongoDB, Node JS. 
        </div>
        </p>
        </div>
        <div className="btns"  >
       <button className="btnn" variant="outline-dark"  >
         <a href={resume} className="download-btn-a"  download="rajatgangwani-resume" >
         DOWNLOAD RESUME
         </a>
      </button>
      </div>
            </div>
        </main>
        
    )
}

export default Home;

