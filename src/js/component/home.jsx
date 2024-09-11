import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { List } from "./List";
import Cartitas from "../Cartitas";
import Footer from "./footer";



const Home = () => {
	return (
		
		<div className="text-center">
				<Navbar></Navbar>	
			<div className="container">
				<Jumbotron></Jumbotron>
				<div className="cartas">
				 <List cards={Cartitas}></List>
				 </div>
			</div>
				<Footer></Footer>
		</div>
	);
};

export default Home;
