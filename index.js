// Registering my app as an angular module
var app = angular.module("myApp", []);


//starting my controller to house all my business
app.controller("myCtrl", function($scope) {
    //initialize, initialize, initialize, initialize
    $scope.todos = [];
    $scope.orderMethod = '';
    $scope.task='';

    //function to add items to array that ng-repeat is watching
    $scope.addTask = function() {
        if ($scope.task == '') {
            alert("Please Type a Task");
        } else {
            //add 
            $scope.todos.push({
                'task': $scope.task,
                'priority': $scope.color,
            });
            //reset the field
            $scope.task = '';
        }
    };
});
