import React from "react";
import { Link } from "react-router-dom"
import { AiOutlineGithub } from "react-icons/ai"
import { ImLinkedin } from "react-icons/im"
import { SiGmail } from "react-icons/si"
import { AiFillFilePdf } from "react-icons/ai"
import "../styles/Contact.css"


function Contact() {
	return(
		<section className="contact">
			<ul className="contacts">
				<h1>My Contacts:</h1>
				<li>
					<Link className="contact-link" to="#"><ImLinkedin className="contact-icon">
						</ImLinkedin>
						My Linked In
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="#">
						<AiOutlineGithub className="contact-icon"></AiOutlineGithub>
						My Git Hub
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="mailto:sDekaiper@gmail.com">
						<SiGmail className="contact-icon"></SiGmail>
							My Email
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="../../public/CV-Sasha-Zhyliuk-short.pdf" download>
							<AiFillFilePdf className="contact-icon"></AiFillFilePdf>
							My CV	
					</Link>
				</li>
			</ul>
		</section>
	)
}

export default Contact;