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
	/*
	let mySelect = new vanillaSelectBox("#ms00N3O000002DEkw",{
		search: true
	});
console.log('vanillaSelectBox');
	*/
});

function checkAndSetACookieExists() {
	if (!document.cookie.split(';').some((item) => item.trim().startsWith('Referrer='))) {	  
		var referrer = (document.referrer && document.referrer != '') ? document.referrer : 'false';
		document.cookie="Referrer=" + referrer + "; path=/;"
	}
}

checkAndSetACookieExists();
 