import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayPicker() {
	const [selectedMonth, setSelectedMonth] = useState('April');
	const [selectedHolidayName, setSelectedHolidayName] = useState('');
	const [holidayList, setHolidayList] = useState([]);

	useEffect(() => {
		async function getHolidays() {
			// let monthParam = getMonthNumberByMonthName(selectedMonth);
			const url = `https://holidays.abstractapi.com/v1/?apikey=${API_KEY}&country=US&year=2022&month=12&day=25${monthParam}`;
  			const response = await fetch(url);
  			const data = await response.json();
  			console.log(data);
			
		}
		getHolidays();
	}, [selectedMonth]);

	return (
		<div>
			<div display={'flex'}>
				<div style={{ fontWeight: 'bold' }}> Pick a Holiday</div>
				{holidayList.map((holiday, index) => (
					<div key={index}>{holiday.name}</div>
				))}

				<div style={{ fontWeight: 'bold' }}>Selected Holiday:</div>
				<div>Halloween</div>
			</div>
		</div>
	);
}
