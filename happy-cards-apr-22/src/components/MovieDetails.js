// import { movieData } from './MovieData';

export default function MovieDetails(props) {
	// console.log('props is: ', props);

	return (
		<div className='MovieDetailsContainer'>
			<div className='MovieTitle'>{props.title}</div>
			<div className='MovieGenre'>{props.genre}</div>
			<div className='MoviePoster'>{props.poster}</div>
			<div className='MovieRated'>{props.rated}</div>
		</div>
	);
}
