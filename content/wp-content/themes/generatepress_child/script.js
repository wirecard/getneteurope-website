document.addEventListener("DOMContentLoaded", function(eventdomloaded) {
	var elementAccept = document.getElementById("wt-cli-accept-all-btn");
	elementAccept.onclick = function(event) {
		eventContenSave(event);
	};
	var elementPrivacy = document.getElementById("wt-cli-privacy-save-btn");
	elementPrivacy.onclick = function(event) {
		eventContenSave(event);
	};
	function eventContenSave(event) {
	  console.log('eventContenSave', event);
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': 'consentSave'
		});
	}
	
	var homeform = !!document.getElementById('mshome00N3O000002DEkw');
	var omnichannelform = !!document.getElementById('msomnichannel00N3O000002DEkw');
	var travelform = !!document.getElementById('mstravel00N3O000002DEkw');
	
	if(homeform) {
		let mySelectHome = new vanillaSelectBox("#mshome00N3O000002DEkw",{search: true});
	}
	if(omnichannelform) {
		let mySelectOmnichannel = new vanillaSelectBox("#msomnichannel00N3O000002DEkw",{search: true});
	}
	if(travelform) {
		let mySelectTravel = new vanillaSelectBox("#mstravel00N3O000002DEkw",{search: true});
	}
	

});

function checkAndSetACookieExists() {
	if (!document.cookie.split(';').some((item) => item.trim().startsWith('Referrer='))) {	  
		var referrer = (document.referrer && document.referrer != '') ? document.referrer : 'false';
		document.cookie="Referrer=" + referrer + "; path=/;"
	}
}

checkAndSetACookieExists();