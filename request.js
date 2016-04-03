/* construct URL */
var url = 'https://128.2.109.159/piwebapi/streams'
   + '/P0-MYhSMORGkyGTe9bdohw0ArhsBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEhWQUMgQUxMIENTTA/plot';

var response = null;
/* GET request */
function getData(){
	$.ajax({
    'url': url,
    'type': 'GET',
    'Name': 'Phipps_IS',
    'Password': 'Energy1?',
    'xhrFields': {
        'withCredentials': true
    }, //only required for CORS
    'success': function(response){
      /* do something with data returned */
      response = response;
      console.log(response);
      // var valueURL = response.Links.Value;
    }
	});
}

