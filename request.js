/* construct URL */
var url = "https://piserver.arc.cmu.edu/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/recorded";
var response = null;
var hvacData = {};

function ajaxRequest(url) {
  console.log("started ajaxRequest()");
  var tok = 'Phipps_IS' + ':' + 'Energy1?';
  hash = btoa(tok);
  authInfo = "Basic " + hash;
  $.ajax({
    type: "GET",
    dataType: "json",
    contentType: "application/javascript",
    async: true,
    crossDomain: true,
    url: url,
    beforeSend: function (xhr) { xhr.setRequestHeader ("Authorization", authInfo); },
    success: function (jsonData) {
        console.log("Success");
        hvacData = initHVACData(jsonData);
        createHighCharts(hvacData);
    },
    error: function (request, textStatus, errorThrown) {
        console.log("Failure")
    }
  });
};

  function initHVACData(jsonData){
    // the data is capped at 1000 data points
    var max = 1000;
    var min = 990;
    hvacData.dataArray = [];
    hvacData.categories = [];
    for(i = max - 1; i >= min; i --) {
      hvacData.dataArray.push(jsonData.Items[i].Value);
      hvacData.categories.push(jsonData.Items[i].Timestamp);
    }
    console.log(hvacData);
    hvacData.dataArray.reverse();
    hvacData.categories.reverse();
    for(i = 0; i < hvacData.categories.length; i++){
      var a = hvacData.categories[i];
      // removing the last element
      var date = (/[0-9]*\-[0-9]+T/.exec(a)[0]).slice(0,-1);
      // removing the first element
      var time = (/T[0-9]*\:[0-9]*/.exec(a)[0]).substring(1);
      hvacData.categories[i] = date + " " + time;
    }
    return hvacData;
  }
  function createHighCharts(hvacData) {
    $('#container').highcharts({
      title: {
        text: 'Phipps Electrical HVAC Consumption',
        x: -20 //center
      },
      xAxis: {
        categories: hvacData.categories
      },
      yAxis: {
        title: {
          text: 'kW'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
    },
      tooltip: {
        valueSuffix: 'kW'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Electrical HVAC',
        data: hvacData.dataArray,
        events: false
      }]
    });
  } 
$( document ).ready(function() {
  var url = "https://piserver.arc.cmu.edu/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/recorded";
  ajaxRequest(url);
});