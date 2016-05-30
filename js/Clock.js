/*
*	This constructor create clock with 3 stages
*	1st stage - Returned H:Mi
*	2st stage - Returned H:Mi:S
*	3st stage - Returned Mo:D:Ye
*/
(function() {
	function Clock (_stage, _element) {
		var stage = _stage || 'short',
			element = _element || 'clock';

		clockView = new View(element),
		clockEvents = new Events(element);

		clockView.createElement();
		clockView.startUpdateElement(showClock);

		clockEvents.add(element, 'click', onLeftClick, false);
		clockEvents.add(element, 'contextmenu', onRightClick, false);

		function onLeftClick (event) {
			changeToTime();

			clockView.updateElement(showClock);

			event.preventDefault();
		}

		function onRightClick (event) {
			changeToDate();

			clockView.updateElement(showClock);
			
			event.preventDefault();
		}

		function changeToTime () {			
			stage = (stage === 'short') ? 'long' : 'short';
		}

		function changeToDate () {
			stage = (stage === 'long') ? 'date' : 'short';
		}

		function showClock () {
			var result = '',
				date = new Date();

			switch(stage) {
				case 'short': 
					result = getHours() + getMinutes();
					break;
				case 'long':
					result = getHours() + getMinutes() + getSeconds();
					break;
				case 'date':
					result = showDate();
					break;	
			}

			function getHours() {
				return date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
			}

			function getMinutes() {
				return date.getMinutes() > 9 ? ':' + date.getMinutes() : ':0' + date.getMinutes();
			}

			function getSeconds() {
				return date.getSeconds() > 9 ? ':' + date.getSeconds() : ':0' + date.getSeconds();
			}

			function getMonth() {
				return (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
			}

			function showDate() {
				return date.getDate() + '/' + getMonth() + '/' + date.getFullYear();
			}

			return result;	
		}

		return this;
	}

	window.Clock = Clock;
})();