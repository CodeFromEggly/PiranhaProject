
var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var xArray = graphData[0];
//var yArray = new Array(xArray.length).fill(1);
var yArray = graphData[1];
var data = [{x:xArray, y:yArray, mode:"markers", type:"scatter"}];
var layout = {
xaxis: {title: "Timestamp"},
yaxis: {range: [0, 2], title: "Price [ETH]"},
title: "Example Graph",
autosize: true
};
Plotly.newPlot("emptyCard", data, layout);