/**
 * Created by Mark on 11/22/2016.
 * References:
 * ngAnimate: https://docs.angularjs.org/api/ngAnimate
 * $interval: https://docs.angularjs.org/api/ng/service/$interval
 * .shift(): http://www.w3schools.com/jsref/jsref_shift.asp
 * .push(): http://stackoverflow.com/questions/16429832/callback-after-async-foreach-angularjs
 */

var myApp = angular.module('myApp', ['ngAnimate']);
myApp.controller('marvelCtrl', function($scope, $http, $interval) {

    var timer;
    $scope.i=0;
    $scope.characters=[];

    $scope.submit = function()
    {
        timer = $interval(function()
        {
            if($scope.i < 100) {
                if ($scope.i>=20)
                    $scope.characters.shift();
                    $http.get("/get-document", {params: {"id": $scope.i+1}})
                        .then(function (response) {
                            $scope.characters.push(response.data);
                            console.log(response.data);
                    });
                $scope.i++;
            }
        },500);
    };
});