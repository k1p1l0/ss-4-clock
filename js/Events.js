(function() {
	/*
	*	This constructor create some view block for any data
	*/
	function Events (element) {
		this.add = function(id, event, method) {
			var _id = document.getElementById(id);

			_id.addEventListener(event, method, false);
		};

		return this;
	}

	window.Events = Events;

})();