/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var movieList=angular.module("my.movieList",["my.model"]);
    movieList.controller("MovieListController",function ($scope,$routeParams,myModel) {
        var category=$routeParams.category;
        var page=$routeParams.page;

        var listCount=12;
        var start=(page-1)*listCount;

        var vm=$scope.vm={};
        vm.data=[];
        vm.pager={};
        vm.loading=true;


        function buildPage(page,total,listCount,category) {
            this.current=page;
            this.max=Math.ceil(total/listCount);
            this.next=page==this.max?this.max:page-0+1;
            this.prev=page==1?1:page-1;
            this.category=category;
        }

        switch (category) {
            case "top250": myModel.getTop250(start,listCount,function (data) {
                vm.data=data.subjects;
                vm.pager=new buildPage(page,data.total,listCount,category);
                vm.loading=false;
            });
                break;
            case "in_theaters": myModel.getInTheaters(start,listCount,function (data) {
                vm.data=data.subjects;
                vm.pager=new buildPage(page,data.total,listCount,category);
                vm.loading=false;
            });
                break;
            case "coming_soon": myModel.getComingSoon(start,listCount,function (data) {
                vm.data=data.subjects;
                vm.pager=new buildPage(page,data.total,listCount,category);
                vm.loading=false;
            });
                break;
        }
    });
})();