import React from "react";
import { Link } from "react-router-dom"
import { DiGithubBadge } from "react-icons/di"
import { ImLinkedin } from "react-icons/im"
import { SiGmail } from "react-icons/si"
import { BsFillTelephoneInboundFill } from "react-icons/bs"


function Contact() {
	return(
		<section className="contact">
			<ul className="contacts">
				<h1>Contact Me</h1>
				<li>
					<Link to="#"><ImLinkedin className="contact-icon"></ImLinkedin>My Linked In</Link>
				</li>
				<li>
					<Link to="#"><DiGithubBadge className="contact-icon"></DiGithubBadge>My Git Hub</Link>
				</li>
				<li>
					<span><SiGmail className="contact-icon"></SiGmail>My Email:</span>
				</li>
				<li>
					<span><BsFillTelephoneInboundFill className="contact-icon"></BsFillTelephoneInboundFill>My Contact Phone:</span>
				</li>
			</ul>
		</section>
	)
}

export default Contact;