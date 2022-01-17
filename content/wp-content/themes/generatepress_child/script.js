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
		if(event && event.currentTarget) {
			var searchField = event.currentTarget.getElementsByTagName("INPUT")[0];
			if(searchField) {
				searchField.focus();
			}
		}
	};
	
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

function showHideOverviewElements(elementsClass, show) {
	document.querySelectorAll('.' + elementsClass).forEach((element, index, array) => {
		element.style.display = show ? 'flex' : 'none';
	});
}

function highlightTabElement(elementsClass) {
	document.querySelectorAll('.overview-tab-link').forEach((element, index, array) => {
		element.classList.remove("overview-tab-link-active")
	});
	document.querySelectorAll('.' + elementsClass).forEach((element, index, array) => {
		element.classList.add("overview-tab-link-active")
	});
}

checkAndSetACookieExists();

function scrollToContent() {
	showHideOverviewElements('overview-area', false);
	if(location.hash.length === 5 && location.hash.indexOf('-')) {
		var groupChar = location.hash.slice(1,2);
		var clickedLevel = location.hash.slice(2,3);
		showHideOverviewElements('overview-area-' + groupChar.toLowerCase(), true);
		highlightTabElement('overview-tab-link-' + groupChar.toLowerCase());
		var groupId = location.hash.slice(1,3);
		var descriptionId = location.hash.slice(4,5);
		var element = document.getElementById(groupId);
		if(clickedLevel != 0) {			
			element.scrollIntoView({behavior: "smooth"});
		}
	} else {
		showHideOverviewElements('overview-area-a', true);
	}
}

showHideOverviewElements('overview-area', false);

scrollToContent();

window.onhashchange = scrollToContent;