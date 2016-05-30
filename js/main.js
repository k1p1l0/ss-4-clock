document.addEventListener('DOMContentLoaded', init, false);

function init() {
	const ELEMENT = 'clock', // View & Event ID for clock
		  CLOCK_TYPE = 'short'; // Type of clock. Can be: short, long, date

	var clockData = new Clock(CLOCK_TYPE, ELEMENT);
}