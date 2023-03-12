import React from "react";
import Project from '../components/Project';
import "../styles/ProjectGallery.css"
import data from "../data.json";

function ProjectGallery() {
	return (
		<section className="projectGallery">
			<div className="projects">
				{data.map((data, i) => {
					return (
						<Project 
							title={data.title}
							deployed_url={data.deployed_url}
							github_url={data.github_url}
							screenshot={data.screenshot}
							key={i}
						/>
					);
				})}
			</div>
		</section>
	)
}

export default ProjectGallery;