/* construct URL */
var url = 'https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot';
var response = null;
/* GET request */

//   $.ajax({
//     type: "GET",
//     xhrFields: {
//         withCredentials: true
//     },
//     dataType: "jsonp",
//     contentType: "application/javascript",
//     async: false,
//     crossDomain: true,
//     url: "https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot",
//     success: function (jsonData) {
//         console.log(jsonData);
//     },
//     error: function (request, textStatus, errorThrown) {
//         console.log(request.responseText);
//         console.log(textStatus);
//         console.log(errorThrown);
//     },
//     username: username,
//     password: password,
//   });
//   alert("finished button function");
// });

// function callbackMethod(saveData){
//  if (saveData == null) {
//     alert("DATA IS UNDEFINED!");  // displays every time
//   }
//   console.log(saveData);
// }




$( document ).ready(function() {
  $(function () {
    $('#container').highcharts({
      title: {
        text: 'Phipps Electrical HVAC Consumption',
        x: -20 //center
      },
      xAxis: {
        categories: ['04-11 12:27am', '04-11 12:49am', '04-11 12:50am', '04-11 12:54am', '04-11 1:40am', 
        '04-11 1:49am', '04-11 1:50am', '04-11 1:57am', '04-11 2:47am', '04-11 2:49am', '04-11 2:50am', 
        '04-11 3:33am']
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
        data: [19.4921, 18.2377, 17.7033, 18.59525, 0.4557355, 0.478894, 0.4798295, 
        0.4564605, 17.43555, 19.2297, 19.8089, 0.456781]
      }]
    });
  });
  
   $('#buttonGraph').on('click', function() {
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
      },
      error: function (request, textStatus, errorThrown) {
          console.log("Failure")
          console.log(request.responseText);
          console.log(textStatus);
          console.log(errorThrown);
      }
    });
  });
});