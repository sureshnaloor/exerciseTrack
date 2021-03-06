import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/ExerciseList.component';
import EditExercise from './components/EditExercise.component';
import CreateExercise from './components/CreateExercise.component';
import CreateUser from './components/CreateUser.component';

import './App.css';

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" component={EditExercise} />
				<Route path="/create" component={CreateExercise} />
				<Route path="/user" component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
