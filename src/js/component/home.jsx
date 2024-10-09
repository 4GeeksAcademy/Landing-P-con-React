import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";




//create your first component
const Home = () => {
	return (<>
		<NavBar/>
		<div className= "container">
		<Jumbotron/>
		<Card/>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
