/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var movieDetail=angular.module("my.movieDetail",["my.model"]);

    movieDetail.controller("MovieDetailController",function ($scope,$routeParams,myModel) {
        var id=$routeParams.id;
        myModel.getSubject(id,function (data) {
            $scope.data=data;
            console.log($scope.data);
        });
    });
})();