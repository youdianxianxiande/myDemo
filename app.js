/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var app=angular.module("my.main",["ngRoute","my.model","my.movieList","my.movieDetail"]);

    app.config(function ($routeProvider) {
        $routeProvider
                .when("/list/:category/:page",{
                    templateUrl: "./movie_list/movie_list_tpl.html",
                    controller: "MovieListController"
                })
                .when("/detail/:id",{
                    templateUrl: "./movie_detail/movie_detail_tpl.html",
                    controller: "MovieDetailController"
                })
                .otherwise({
                    redirectTo: "/list/top250/1"
            })

    });

})();