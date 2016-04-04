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

function callbackMethod(saveData){
 if (saveData == null) {
    alert("DATA IS UNDEFINED!");  // displays every time
  }
  console.log(saveData);
}

$( document ).ready(function() {
  // $('#buttonGraph').on('click', function() {
  //   alert("hello");
  // });
  $('#buttonGraph').on('click', function() {
    $.ajax({
      type: "GET",
      xhrFields: {
          withCredentials: true
      },
      dataType: "jsonp",
      contentType: "application/javascript",
      async: true,
      crossDomain: true,
      url: "https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot?callback=?",
      jsonpCallback: 'callbackMethod',
      success: function (jsonData) {
          console.log("entered success");
          var data = JSON.parse(jsonData)
          console.log("Success");
          console.log(data);
      },
      error: function (request, textStatus, errorThrown) {
          console.log("Failure")
          console.log(request.responseText);
          console.log(textStatus);
          console.log(errorThrown);
      },
      username: 'Phipps_IS',
      password: 'Energy1?',
    });
  });
});