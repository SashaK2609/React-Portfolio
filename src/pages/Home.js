import React from "react";
import "../styles/Home.css";

function Home() {
	return (
		<article className="home">
			<section className="about">
				<h1>Hello, <br /> I'm Oleksandra Zhyliuk</h1>
				<p>Do it now, otherwise later is never!</p>
			</section>
			<section className="headshot">
				<img className="avatar" src="/assets/avatar.jpg" alt="jjlij"/>
			</section>
		</article>
	)
}

export default Home;