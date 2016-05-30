/*
*	This constructor create some view block for any data
*/
(function() {
	function View (_elementName) {
		var elementIdName = _elementName,
			elementId = '';

		this.createElement = function () {
			elementId = document.createElement('div');

			elementId.id = elementIdName;

			document.body.insertBefore(elementId, document.body.children[1]);
		};

		this.startUpdateElement = function (fn) {
			elementId.innerHTML = fn();

			timerId = setInterval(function() {
				var context = fn();
				elementId.innerHTML = context;
			}, 1000);
		};

		this.updateElement = function (fn) {
			elementId.innerHTML = fn();
		};

		return this;
	}


	window.View = View;
})();