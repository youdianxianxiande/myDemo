/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var myModel=angular.module("my.model",["my.services.jsonp"]);

    myModel.factory("myModel",function (myJsonp) {
        return {
            getTop250:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/top250?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                    myJsonp(url,function(data){
                        callback(data);
                    })
            },

            getInTheaters:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/in_theaters?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                    myJsonp(url,function(data){
                        callback(data);
                    })
            },

            getComingSoon:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/coming_soon?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                    myJsonp(url,function(data){
                        callback(data);
                    })
            },

            getSubject:function(id,callback){
                var url = `http://api.douban.com/v2/movie/subject/${id}?&callback=JSONP_CALLBACK`;
                    myJsonp(url,function(data){
                        callback(data);
                    })
            }
        }
    });
})();