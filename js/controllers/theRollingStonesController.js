app.controller('theRollingStonesController', ['$scope', function($scope)
{
	var self = this;

	console.log('rolling controller init'),

	//bind data
	this.group = {
		title: 'The rolling stones data',
		youtube: ''
	}
	this.title = 'the rolling stones data';

}]);