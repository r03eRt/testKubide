app.controller('theRollingStonesController', ['$scope', function($scope)
{
	//context vars
	var self = this;

	//initialize controller
	console.log('rolling controller init'),

	//data of the app
	this.group = {
		title: 'The rolling stones data',
		img: 'rolling-stones.jpg',
		h2: 'los más nuevos creadores de éxitos  en Reino Unido',
		youtube: 'vC0Qt1lvLq8',
		text: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.'
	}
}]);