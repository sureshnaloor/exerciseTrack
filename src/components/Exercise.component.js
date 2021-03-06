import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercise(props) {
	return (
		<tr>
			<td> {props.exercise.username}</td>
			<td> {props.exercise.description}</td>
			<td> {props.exercise.duration}</td>
			<td> {props.exercise.date}</td>
			<td>
				{' '}
				<Link to={'/edit/' + props.exercise._id}> edit </Link>
				<a
					href="#"
					onClick={() => {
						props.deleteExercise(props.exercise._id);
					}}
				>
					delete{' '}
				</a>
			</td>
		</tr>
	);
}
