import React from "react";
import './Projects.css'
import shopper from '../../assets/shopper_image.png'
import todo from '../../assets/todo.png'

const Projects=()=>{
    return(
        <div className="projects">
            <h1>Portfolio</h1>
<div className="project">
            <div className="e-commerce">
                <h2>E-Commerce project</h2>
                <img onClick={()=>window.open("https://thasneemshopper.netlify.app/")}src={shopper} alt='' className="shopperimg"/>
            </div>
            <div className="todo">
                <h2>To Do App</h2>
                <img onClick={()=>window.open("https://tstodo-app.netlify.app/")} src={todo} alt='' className="todo_img"/>
            </div>
            </div>
        </div>
    )
}
export default Projects