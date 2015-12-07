//function showStats(dataArray) {
//    //alert('');
//    alert(dataArray);
//    for(i in dataArray) {
//        console.log(i);
//    }
//    var chart = new CanvasJS.Chart("chartContainer", {
//        title: {
//            text: "Mobile Phones Used For",
//            fontFamily: "Verdana",
//            fontColor: "Peru",
//            fontSize: 28
//
//        },
//        animationEnabled: true,
//        axisY: {
//            tickThickness: 0,
//            lineThickness: 0,
//            valueFormatString: " ",
//            gridThickness: 0
//        },
//        axisX: {
//            tickThickness: 0,
//            lineThickness: 0,
//            labelFontSize: 18,
//            labelFontColor: "Peru"
//
//        },
//        data: [
//            {
//                indexLabelFontSize: 26,
//                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",
//
//                indexLabelPlacement: "inside",
//                indexLabelFontColor: "white",
//                indexLabelFontWeight: 600,
//                indexLabelFontFamily: "Verdana",
//                color: "#62C9C3",
//                type: "bar",
//                dataPoints: dataArray
//                //dataPoints: [
//                //    { y: 21, label: "21%", indexLabel: "Video" },
//                //    { y: 25, label: "25%", indexLabel: "Dining" },
//                //    { y: 33, label: "33%", indexLabel: "Entertainment" },
//                //    { y: 36, label: "36%", indexLabel: "News" },
//                //    { y: 42, label: "42%", indexLabel: "Music" },
//                //    { y: 49, label: "49%", indexLabel: "Social Networking" },
//                //    { y: 50, label: "50%", indexLabel: "Maps/ Search" },
//                //    { y: 55, label: "55%", indexLabel: "Weather" },
//                //    { y: 61, label: "61%", indexLabel: "Games" }
//                //]
//            }
//        ]
//    });
//
//    chart.render();
//}