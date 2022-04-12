import { useState } from 'react';

export default function HolidayPicker() {
	const [holidayName, setHolidayName] = useState('Thanksgiving');
	console.log('holidayName is: ', holidayName);

	return (
		<div>
			<div>{holidayName}</div>
			<button onClick={() => setHolidayName('New Years')}>
				Change Holiday to New Years
			</button>
			<button onClick={() => setHolidayName('Halloween')}>
				Change Holiday to Halloween
			</button>
		</div>
	);
}
