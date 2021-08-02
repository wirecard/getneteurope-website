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
	
	var homeform = !!document.getElementById('mshomecountry');
	var omnichannelform = !!document.getElementById('msomnichannelcountry');
	var travelform = !!document.getElementById('mstravelcountry');
	
	if(homeform) {
		let mySelectHome = new vanillaSelectBox("#mshomecountry",{search: true, placeHolder: "-Please select-", translations: { "all": "All european countries", "items": "european countries"}});
	}
	if(omnichannelform) {
		let mySelectOmnichannel = new vanillaSelectBox("#msomnichannelcountry",{search: true, placeHolder: "-Please select-", translations: { "all": "All european countries", "items": "european countries"}});
	}
	if(travelform) {
		let mySelectTravel = new vanillaSelectBox("#mstravelcountry",{search: true, placeHolder: "-Please select-", translations: { "all": "All european countries", "items": "european countries"}});
	}
	
	var countrySelectElements = document.getElementsByClassName("vsb-main");
	var myFunction = function(event) {
		var attribute = this.getAttribute("data-myattribute");
		console.log('myFunction', event);
		if(event && event.currentTarget) {
			var searchField = event.currentTarget.getElementsByTagName("INPUT")[0];
			if(searchField) {
				searchField.focus();
			}
			console.log('searchField', searchField);
		}
	};
	
		console.log('countrySelectElements', countrySelectElements);
	for (var i = 0; i < countrySelectElements.length; i++) {
		countrySelectElements[i].addEventListener('click', myFunction, false);
	}
	

});

function checkAndSetACookieExists() {
	if (!document.cookie.split(';').some((item) => item.trim().startsWith('Referrer='))) {	  
		var referrer = (document.referrer && document.referrer != '') ? document.referrer : 'false';
		document.cookie="Referrer=" + referrer + "; path=/;"
	}
}

checkAndSetACookieExists();