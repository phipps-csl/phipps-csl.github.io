/* construct URL */
var url = 'https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot';
var response = null;

var hvacData = {};
$( document ).ready(function() {
  function ajaxRequest() {
    console.log("started ajaxRequest()");
    var tok = 'Phipps_IS' + ':' + 'Energy1?';
    hash = btoa(tok);
    authInfo = "Basic " + hash;
    $.ajax({
      type: "GET",
      // xhrFields: {
      //     withCredentials: true
      // },
      dataType: "json",
      contentType: "application/javascript",
      async: true,
      crossDomain: true,
      url: "https://piserver.arc.cmu.edu/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/recorded",
      // username: 'Phipps_IS',
      // password: 'Energy1?',
      beforeSend: function (xhr) { xhr.setRequestHeader ("Authorization", authInfo); },
      success: function (jsonData) {
          console.log("entered success");
          //var data = JSON.parse(jsonData)
          console.log(jsonData);
          console.log("Success");
          console.log(jsonData);
          console.log("started init function call");
          hvacData = initHVACData(jsonData);
          console.log(hvacData);
          console.log("ended init function call");
          // hvacData = jsonData;
      },
      error: function (request, textStatus, errorThrown) {
          console.log("Failure")
          console.log(request.responseText);
          console.log(textStatus);
          console.log(errorThrown);
      }
    });
  };

  function initHVACData(jsonData){
    // the data is capped at 1000 data points
    console.log("started function code");
    var max = 1000;
    var min = 990;
    hvacData.dataArray = [];
    hvacData.categories = [];
    for(i = max - 1; i >= min; i --) {
      hvacData.dataArray.push(jsonData.Items[i].Value);
      hvacData.categories.push(jsonData.Items[i].Value);
    }
    console.log(hvacData);
    console.log("ended function code");
    return hvacData;
  }
  function createHighCharts() {
    console.log("started createHighCharts");
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
          text: 'HVAC'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
    },
      tooltip: {
        valueSuffix: 'HVAC'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Electrical HVAC',
        data: hvacData.dataArray
      }]
    });
    console.log("Ran Create Highcharts");
  } 
  // ajaxRequest();
  // console.log("ran these lines");
  // createHighCharts();
});