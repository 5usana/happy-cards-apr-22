import './App.scss';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import HolidayPicker from './components/HolidayPicker';
// import MovieDetails from './components/MovieDetails';
// import { movieData } from './components/movieData';

function App() {
	return (
		<div>
			{/* <MovieDetails title={movieData.Title} type={movieData.Genre} /> */}
			<HeaderFooter>
				{/* <Home /> */}
				<HolidayPicker />
			</HeaderFooter>
		</div>
	);
}

export default App;
