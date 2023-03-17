import React from "react";
import { Link } from "react-router-dom"
import "../styles/Project.css"


function Project(props) {
	let img = props.screenshot;
	console.log(img)
	

	return (
		<div className="projectItem">
			<div className="project-wrapper">
				<img className="project-img image-cover" src={img} alt=""/>
			</div>
      		<ul className="content">
      			<li>
      				<h3>{props.title}</h3> 
      			</li>
      			<li>
      				<Link className="project-link" to={props.github_url}>GitHub</Link> 
      			</li>
      			<li>
      				<Link className="project-link" to={props.deployed_url}>Deployed Page</Link> 
      			</li>
					
      		</ul>
		</div>
	)
}

export default Project;