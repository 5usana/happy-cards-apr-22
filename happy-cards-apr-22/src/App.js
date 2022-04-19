import './App.scss';
import CardForm from './components/CardForm';
// import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
// import HolidayPicker from './components/HolidayPicker';

function App() {
	return (
		<div>
			<HeaderFooter>
				{/* <Home /> */}
				{/* <HolidayPicker /> */}
				<CardForm />
			</HeaderFooter>
		</div>
	);
}

export default App;
