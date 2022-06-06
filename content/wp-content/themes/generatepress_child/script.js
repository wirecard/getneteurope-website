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
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'consentSave'
        });
    }

    var homeform = !!document.getElementById('mshomecountry');
    var omnichannelform = !!document.getElementById('msomnichannelcountry');
    var travelform = !!document.getElementById('mstravelcountry');
    var airlineformSelectBool = !!document.getElementById('airlinecountry');
    var europeanformSelectBool = !!document.getElementById('europeancountry');
    var airlineformSelect = document.getElementById('airlinecountry');
    var europeanformSelect = document.getElementById('europeancountry');
	var selectPlaceholder = "-Please select-";
	var allEuropeanCountries = "All european countries";
    var europeanCountries = " european countries";
	var allCountries = "All countries";
    var countryItems = " countries";
	var selectAllTranslation = "Select all";
	var clearAllTranslation = "Clear all";
	
	if (location.pathname && location.pathname.indexOf("/de/") >= 0) {
		selectPlaceholder = "-Bitte wählen-";
		allEuropeanCountries = "Alle europäischen Länder";
		europeanCountries = " europäische Länder";
		allCountries = "Alle Länder";
		countryItems = " Länder";
		selectAllTranslation = "Wählen Sie Alle";
		clearAllTranslation = "Alle abwählen";
	}
	
	if (location.pathname && location.pathname.indexOf("/es/") >= 0) {
		selectPlaceholder = "-Por favor seleccione-";
		allEuropeanCountries = "Todos los países europeos";
		europeanCountries = " países europeos";
		allCountries = "Todos los países";
		countryItems = " los paises";
		selectAllTranslation = "Seleccionar todo";
		clearAllTranslation = "deseleccionar todo";
	}
	
	if (location.pathname && location.pathname.indexOf("/pl/") >= 0) {
		selectPlaceholder = "-Proszę wybrać-";
		allEuropeanCountries = "Wszystkie kraje europejskie";
		europeanCountries = " kraje europejskie";
		allCountries = "Wszystkie kraje";
		countryItems = " kraje";
		selectAllTranslation = "Zaznacz wszystko";
		clearAllTranslation = "odznacz wszystkie";
	}

    if (homeform) {
        let mySelectHome = new vanillaSelectBox("#mshomecountry", {
            search: true,
            placeHolder: selectPlaceholder,
            translations: {
                "all": allEuropeanCountries,
                "items": europeanCountries,
				"selectAll": selectAllTranslation,
				"clearAll": clearAllTranslation
            }
        });
    }
    if (omnichannelform) {
        let mySelectOmnichannel = new vanillaSelectBox("#msomnichannelcountry", {
            search: true,
            placeHolder: selectPlaceholder,
            translations: {
                "all": allEuropeanCountries,
                "items": europeanCountries,
				"selectAll": selectAllTranslation,
				"clearAll": clearAllTranslation
            }
        });
    }
    if (travelform) {
        let mySelectTravel = new vanillaSelectBox("#mstravelcountry", {
            search: true,
            placeHolder: selectPlaceholder,
            translations: {
                "all": allEuropeanCountries,
                "items": europeanCountries,
				"selectAll": selectAllTranslation,
				"clearAll": clearAllTranslation
            }
        });
    }

    let mySelectEuropeanCountry;
    let mySelectAirlineCountry;

    if (europeanformSelectBool) {
        mySelectEuropeanCountry = new vanillaSelectBox("#europeancountry", {
            search: true,
            placeHolder: selectPlaceholder,
            translations: {
                "all": allEuropeanCountries,
                "items": europeanCountries,
				"selectAll": selectAllTranslation,
				"clearAll": clearAllTranslation
            }
        });
    }


    var elementAirlineCheckbox = document.getElementById("airlinecheckbox");

    function toggleCountrySelect(showAirline) {
        const selectBoxesCountry = document.getElementsByName("00N3O000002DEkw");
        if (selectBoxesCountry && selectBoxesCountry.length > 1) {
            selectBoxesCountry[0].selectedIndex = -1;
            selectBoxesCountry[1].selectedIndex = -1;
        }
        if (showAirline) {
            mySelectAirlineCountry = new vanillaSelectBox("#airlinecountry", {
                search: true,
                placeHolder: selectPlaceholder,
                translations: {
                    "all": allCountries,
                    "items": countryItems,
					"selectAll": selectAllTranslation,
					"clearAll": clearAllTranslation
                }
            });
            mySelectEuropeanCountry.destroy();
            airlineformSelect.disabled = false;
            europeanformSelect.style.display = "none";
            europeanformSelect.disabled = true;
            if (europeanformSelect.options[0].value === "all") {
                europeanformSelect.remove(0)
            }
        } else {

            europeanformSelect.disabled = false;
			if(mySelectAirlineCountry) {
				mySelectAirlineCountry.destroy();
			}
            airlineformSelect.style.display = "none";
            mySelectEuropeanCountry = new vanillaSelectBox("#europeancountry", {
                search: true,
                placeHolder: selectPlaceholder,
                translations: {
                    "all": allEuropeanCountries,
                    "items": europeanCountries,
					"selectAll": selectAllTranslation,
					"clearAll": clearAllTranslation
                }
            });
            airlineformSelect.disabled = true;
            europeanformSelect.disabled = false;
            if (airlineformSelect.options[0].value === "all") {
                airlineformSelect.remove(0)
            }

        }
    }

    if (elementAirlineCheckbox) {
        elementAirlineCheckbox.addEventListener('change', function(e) {
            e.preventDefault();

            if (airlineformSelectBool) {
                toggleCountrySelect(elementAirlineCheckbox.checked);
            }

        });
    }


    var countrySelectElements = document.getElementsByClassName("vsb-main");
    var myFunction = function(event) {
        var attribute = this.getAttribute("data-myattribute");
        if (event && event.currentTarget) {
            var searchField = event.currentTarget.getElementsByTagName("INPUT")[0];
            if (searchField) {
                searchField.focus();
            }
        }
    };

    for (var i = 0; i < countrySelectElements.length; i++) {
        countrySelectElements[i].addEventListener('click', myFunction, false);
    }
	
	var linkPopupOpen = document.querySelectorAll(".link-popup a");
	var contentPopupBackground = document.querySelector("#bg-dark-popup");
	var allContentPopups = document.getElementsByClassName("popup-content-wrapper");
	var allPopupCloseIcons = document.getElementsByClassName("close-popup-content");
	
	
	if(contentPopupBackground) {
		var hideAllPopups = function() {
			for (var i = 0; i < allContentPopups.length; i++) {
				allContentPopups[i].style.display = "none";
			}
		}

		var hideAllPopupsAndBackground = function() {
			hideAllPopups();
			contentPopupBackground.style.display = "none";
		}
		contentPopupBackground.addEventListener('click', hideAllPopupsAndBackground, false);
		for (var i = 0; i < allPopupCloseIcons.length; i++) {
			allPopupCloseIcons[i].addEventListener('click', hideAllPopupsAndBackground, false);
		}


		var linkPopupOpen = document.querySelectorAll(".link-popup a");
		var openPopups = function(event) {
			var hrefAttr = this.getAttribute("href");
			var currentContentPopup = document.querySelector(hrefAttr);
			if (event && event.currentTarget && currentContentPopup) {
				hideAllPopups();
				contentPopupBackground.style.display = "block";
				currentContentPopup.style.display = "block";
			}
		};
		for (var i = 0; i < linkPopupOpen.length; i++) {
			linkPopupOpen[i].addEventListener('click', openPopups, false);
		}
	}
	
	function tabContentClick(_tabNavLabels) {
		var tabNavFunction = function(event) {
			var tabvalue = this.getAttribute("data-tabvalue");
			if (event && event.currentTarget && tabvalue) {
				window.location.hash = '#' + tabvalue;
			}
		};

		for (var i = 0; i < _tabNavLabels.length; i++) {
			_tabNavLabels[i].addEventListener('click', tabNavFunction, false);
		}
	}
	
	var tabNavLabels = document.getElementsByClassName("tabs-nav-label");
	if(tabNavLabels && tabNavLabels.length > 0) {
		tabContentClick(tabNavLabels);
	}
	
	const scrollTabNav = document.querySelector("#tabs-nav-wrapper");
	const tabNavArrowLeft = document.querySelector("#tabs-nav-arrow-left");
	const tabNavArrowRight = document.querySelector("#tabs-nav-arrow-right");
	if(scrollTabNav) {
		scrollTabNav.addEventListener("scroll", event => {
			/*
			console.log("scrollLeft  366", scrollTabNav.scrollLeft);
			console.log("clientWidth 375", scrollTabNav.clientWidth);
			console.log("scrollWidth 741", scrollTabNav.scrollWidth);
			*/
			if(scrollTabNav.scrollLeft > 5) {
				tabNavArrowLeft.classList.add("showarrow");
			} else {
				tabNavArrowLeft.classList.remove("showarrow");
			}
			
			if((scrollTabNav.scrollLeft + scrollTabNav.clientWidth + 5) >= scrollTabNav.scrollWidth) {
				tabNavArrowRight.classList.add("hidearrow");
			} else {
				tabNavArrowRight.classList.remove("hidearrow");
			}
			tabNavArrowLeft.classList.add("anotherclass");
			
			
        }, { passive: true });
	}


});

function checkAndSetACookieExists() {
    if (!document.cookie.split(';').some((item) => item.trim().startsWith('Referrer='))) {
        var referrer = (document.referrer && document.referrer != '') ? document.referrer : 'false';
        document.cookie = "Referrer=" + referrer + "; path=/;"
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

function scrollToElementById(elementId) {
	var elements = document.getElementsByTagName("Form");
	if(elements && elements.length > 0) {
		elements[0].scrollIntoView({
        	behavior: "smooth"
        });
	}
}

function scrollToContent() {
    showHideOverviewElements('overview-area', false);
    if (location.hash.length === 5 && location.hash.indexOf('-')) {
        var groupChar = location.hash.slice(1, 2);
        var clickedLevel = location.hash.slice(2, 3);
        showHideOverviewElements('overview-area-' + groupChar.toLowerCase(), true);
        highlightTabElement('overview-tab-link-' + groupChar.toLowerCase());
        var groupId = location.hash.slice(1, 3);
        var descriptionId = location.hash.slice(4, 5);
        var element = document.getElementById(groupId);
        if (clickedLevel != 0) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    } else {
        showHideOverviewElements('overview-area-a', true);
    }

    function logSubmit(event) {
        const countryFieldWrapper = document.getElementById("btn-group-europeancountry");
        const selectBoxesCountry = document.getElementsByName("00N3O000002DEkw");
        const airlineChecked = (document.getElementById("airlinecheckbox") && document.getElementById("airlinecheckbox").checked);
        if (selectBoxesCountry && selectBoxesCountry.length > 1) {
            if ((!airlineChecked && selectBoxesCountry[0].selectedIndex === -1) || (airlineChecked && selectBoxesCountry[1].selectedIndex === -1)) {

				scrollToElementById("btn-group-europeancountry");
				countryFieldWrapper.classList.add("error");
				countryFieldWrapper.addEventListener('click', (event) => {
				  countryFieldWrapper.classList.remove("error");
				});
                event.preventDefault();
                return false;
            }
        }


        const urlField = document.getElementById("homeurl");
        if (urlField) {
            const urlValue = urlField.value;
            if (urlValue === "") {
                urlField.value = "No";
            }
        }
        // event.preventDefault();
    }
    const forms = document.getElementsByTagName('form');
    if (forms && forms.length > 0) {
        forms[0].addEventListener('submit', logSubmit);
    }
}

showHideOverviewElements('overview-area', false);

scrollToContent();

window.onhashchange = scrollToContent;