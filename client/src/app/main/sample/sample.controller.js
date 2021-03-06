(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(SampleData,$scope,$http)
    {
              // Data
        $scope.helloText = SampleData.data.helloText;

        $http.get('/currentuser').then(function(result){
          $scope.currentU = result.data;
          console.log($scope.currentU);
        });

    }
})();
