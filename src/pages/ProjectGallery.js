import React from "react";
import Project from '../components/Project';
import "../styles/ProjectGallery.css"

function ProjectGallery() {
	return (
		<section className="projectGallery">
			<div className="projects">
				<Project />
			</div>
		</section>
	)
}

export default ProjectGallery;