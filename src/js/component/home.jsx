import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { List } from "./List";
import Cartitas from "../Cartitas";


const Home = () => {
	return (
		
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<List cards={Cartitas}></List>
		</div>
	);
};

export default Home;
