/* construct URL */
var url = 'https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot';
var response = null;
/* GET request */
function getData(){
	$.ajax({
    'type': 'GET',
    'url': url,
    'crossDomain': 'True',
    'headers': { 'Access-Control-Allow-Origin': '*' },
    // 'Username': 'Phipps_IS',
    // 'Password': 'Energy1?',
    // 'xhrFields': {
    //     'withCredentials': true
    // }, //only required for CORS
    'success': function(response){
      /* do something with data returned */
      response = response;
      console.log(response);
      // var valueURL = response.Links.Value;
    }
	});
}
$( document ).ready(function() {
});
// function getData(){
//   $.getJSON('https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot', 
//     function(json) {
//       console.log(json);
//   });
// }

// https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot

