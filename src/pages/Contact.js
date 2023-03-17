import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { AiFillFilePdf } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";


function Contact() {
	return(
		<section className="contact">
			<ul className="contacts">
				<h1>Contact me:</h1>
				<li>
					<Link className="contact-link" to="#"><ImLinkedin className="contact-icon">
						</ImLinkedin>
						LinkedIn
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="#">
						<AiOutlineGithub className="contact-icon"></AiOutlineGithub>
						Git Hub
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="mailto:s.dekaiper@gmail.com">
						<SiGmail className="contact-icon"></SiGmail>
							Email
					</Link>
				</li>
				<li>
					<Link className="contact-link" to="https://drive.google.com/file/d/1eAABSPdo6-4PZLDrIBzNBdo68L_z9guM/view?usp=sharing" target="_blank" download>
							<AiFillFilePdf className="contact-icon"></AiFillFilePdf>
							CV	
					</Link>
				</li>
				<ContactForm />
			</ul>
		</section>
	)
}

export default Contact;