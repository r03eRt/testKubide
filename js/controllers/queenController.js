app.controller('queenController', ['$scope', function($scope)
{
	var self = this;

	console.log('queen controller init'),

	//bind data
	this.group = {
		title: 'Queen',
		img: 'queen.jpg',
		h2: 'Años formativos en Smile y cambio de nombre (1968-1971)',
		youtube: 'Z19S41mdXsc',
		text: 'En 1968 el guitarrista Brian May y el baterista Roger Taylor se unieron con el cantante Tim Staffell conformando así el conjunto Smile, un grupo de hard rock psicodélico. En esta etapa, May ya usaba su guitarra Red Special, la cual había construido junto a su padre a los 16 años. Smile firmó con Mercury Records en 1969, y tuvo su primera sesión de grabación en los Trident Studios ese año. Staffell estudiaba en Ealing Art College con Freddie Mercury, a quien presentó a la banda. Mercury, que para entonces había integrado formaciones como Ibex, Wreckage o Sour Milk Sea, era un acérrimo fanático del grupo. En abril de 1970, Staffell abandonó Smile para unirse a otra banda, Humpy Bong. May y Taylor decidieron contactar entonces con Mercury para que fuese el nuevo cantante.'
	}

}]);