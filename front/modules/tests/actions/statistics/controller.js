angular.module('app').controller('StatisticsController', [
    '$scope','$rootScope' , '$routeParams', 'StatisticsService', 'FindTestService',
    function ($scope, $rootScope, $routeParams, StatisticsService, FindTestService) {

        $scope.test = FindTestService.get({tId: $routeParams.id});

        //console.log($scope.test.questions);
        $scope.dataArray = [];

        $scope.test.$promise.then(function(data) {
            data.questions.forEach(function(item, i, arr) {
                var ch = [];
                $scope.statistic = StatisticsService.query({qId: item.id});
                $scope.statistic.$promise.then(function (data2) {
                    $scope.totalCount = 0;
                    for (var i = 0; i < data2.length; i++) {
                        $scope.totalCount += +data2[i].count;
                    }
                    for (var i = 0; i < data2.length; i++) {
                        ch.push(
                            {
                                y: +data2[i].count,
                                label: (data2[i].count / $scope.totalCount * 100).toFixed(2) + '%',
                                indexLabel: data2[i].choice_text
                            }
                        );
                    }
                });
                $scope.dataArray.push(ch);
            });
            // return $scope.dataArray;
        });
console.log($scope);
        // .then(function(data) {
        //     var newone = data;
        //     console.log(newone[0]);
        //     newone.forEach(function(item,i,arr) {
        //         console.log(item);
        //     });
        // });


        /* I use Listener in order to show Statistics Diagramm after page is loaded.
         * In the Listener I call showStats() function which shows a Diagramm.
         * But I need to wrap showStats() in setTimeout function, because
         * showStats() function uses loaded in controller data, which can be loaded after page is loaded,
         * so the Data won't be accessible in the showStats() function and the Diagramm won't be shown.
         * So I need that Delay in order to have time to load Data before using it in the function.
         */
        // $scope.$on('$viewContentLoaded', function() {
        //     setTimeout(function() {
        //         $scope.showStats();
        //     }, 1000);
        //
        // });
        //
        $scope.showStats = function(data) {
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: $scope.question.text,
                    fontFamily: "Verdana",
                    fontColor: "Peru",
                    fontSize: 28

                },
                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "Peru"

                },
                data: [
                    {
                        indexLabelFontSize: 26,
                        toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",
                        indexLabelPlacement: "inside",
                        indexLabelFontColor: "white",
                        indexLabelFontWeight: 600,
                        indexLabelFontFamily: "Verdana",
                        color: "#62C9C3",
                        type: "bar",
                        dataPoints:  data
                        //dataPoints: [
                        //    { y: 21, label: "21%", indexLabel: "Video" },
                        //    { y: 25, label: "25%", indexLabel: "Dining" },
                        //    { y: 33, label: "33%", indexLabel: "Entertainment" },
                        //    { y: 36, label: "36%", indexLabel: "News" },
                        //    { y: 42, label: "42%", indexLabel: "Music" },
                        //    { y: 49, label: "49%", indexLabel: "Social Networking" },
                        //    { y: 50, label: "50%", indexLabel: "Maps/ Search" },
                        //    { y: 55, label: "55%", indexLabel: "Weather" },
                        //    { y: 61, label: "61%", indexLabel: "Games" }
                        //]
                    }
                ]
            });

            chart.render();
        };

    }]);
