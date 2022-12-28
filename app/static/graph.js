var darkMode = localStorage.getItem('dark-mode');
var cBrand = '#c47365';
var cBright = '#39b389';
if (darkMode === 'true'){
    var cSurface = '#59725c';
    var cOnBgHigh = '#f8faf9';
    var cOnBgMed = '#dce2dd';
    var cOnBgLow = '#bac7bc';
} 
else {
    var cSurface = '#ebeeeb';
    var cOnBgHigh = '#344336';
    var cOnBgMed = '#759079';
    var cOnBgLow = '#a7b7a9';
}


var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var xArray = graphData[0];
//var yArray = new Array(xArray.length).fill(1);
var yArray = graphData[1];
var data = [{x:xArray, y:yArray, mode:"markers", type:"scatter", marker: {color: cBright}, autosize: true}];
var layout = {
    xaxis: {title: "Timestamp", gridcolor: cOnBgLow},
    yaxis: {range: [0, 2], title: "Price [ETH]", gridcolor: cOnBgMed},
    title: "Detection History",
    paper_bgcolor: cSurface,
    plot_bgcolor: cSurface,
    font: {color: cOnBgHigh},
    
};
Plotly.newPlot("emptyCard", data, layout);