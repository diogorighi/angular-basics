'use strict';

angular.module("todoListApp")
.service('dataService', function($http){

	this.getTodos = function(callback) {
		$http.get('mocks/todos.json')
		.then(callback);	
	};

	this.deleteTodo = function(todo){
		console.log('The ' + todo.title + " todo has been deleted");
	}

	this.saveTodo = function(todo){
		console.log('The ' + todo.title + " todo has been saved");	
	}
	
});
