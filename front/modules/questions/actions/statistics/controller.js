angular.module('app').controller('StatisticsController', [
    '$scope','$rootScope' , '$routeParams', 'StatisticsService', 'FindQuestionService',
    function ($scope, $rootScope, $routeParams, StatisticsService, FindQuestionService) {

        $scope.question = FindQuestionService.get({qId: $routeParams.id});

        $scope.statistic = StatisticsService.query({qId: $routeParams.id});

        $scope.dataArray = [];

        $scope.statistic.$promise.then(function (data) {
            $scope.totalCount = 0;

            for (var i = 0; i < data.length; i++) {
                $scope.totalCount += +data[i].count;
            }
            console.log( $scope.totalCount);
            for (var i = 0; i < data.length; i++) {
                $scope.dataArray.push(
                    {
                        y: +data[i].count,
                        label: (data[i].count / $scope.totalCount * 100).toFixed(2) + '%',
                        indexLabel: data[i].choice_text
                    }
                );
            }
        });

        /* I use Listener in order to show Statistics Diagramm after page is loaded.
         * In the Listener I call showStats() function which shows a Diagramm.
         * But I need to wrap showStats() in setTimeout function, because
         * showStats() function uses loaded in controller data, which can be loaded after page is loaded,
         * so the Data won't be accessible in the showStats() function and the Diagramm won't be shown.
         * So I need that Delay in order to have time to load Data before using it in the function.
         */
        $scope.$on('$viewContentLoaded', function() {
            setTimeout(function() {
                $scope.showStats();
            }, 1000);

        });

        $scope.showStats = function() {
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
                        dataPoints:  $scope.dataArray
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
