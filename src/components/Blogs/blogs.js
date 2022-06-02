import React, { useEffect, useState } from 'react'
import {Card,CardGroup, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blogsstyle.css" 
import axios from "axios"
import blogsvg from "../../images/blogs-svg.svg"


const Blogs = () =>{
  const [articles,setArticles] =useState([]);
  useEffect(() => {
    getAllArticles();
  }, [])
  
  const getAllArticles = async () => {
  await axios.get("https://dev.to/api/articles/?username=rajatgangwani")
    .then((response)=> {
      setArticles(response.data);
      console.log(response)
      // return response.data;
  }).catch(error=> console.log(`Error: ${error}`));
  }

  console.log("articles:",articles);
  return (
    <div className="blog" >
      <div className='blog-left'>
        <img src={blogsvg} className="blog-img" alt="blog-img"   />
      </div>
    <div className='blog-right' >
      {articles.length === 0 ? (<span className='loader loading'  ></span>) :(
      <CardGroup>
        {articles.map((article,key)=>
      <Card as="a" target="_blank" href={article.url} style={{ width: '18rem',margin:"2rem",cursor: "pointer",textDecoration:"none",color:"black" }}>
<Card.Img variant="top" src={article.cover_image} />
  <Card.Body>
  <Card.Title>{article.title}</Card.Title>
  <Card.Text>
    {article.description}
  </Card.Text>

  <div variant="primary">{article.tag_list.map((tag)=><span className='tags' >{tag}</span>)}</div>
  </Card.Body>
</Card>  )
        }
</CardGroup>
      )}
    </div>   
    </div>
  )
}
  

  


export default Blogs;
