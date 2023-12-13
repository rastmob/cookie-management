$(document).ready(function() {
    generateCookieCategoryList();
    checkCookieConsent();
});

function generateCookieCategoryList() {
    const categoryListContainer = $('#cookieCategoryList');
    categoryListContainer.empty();

    const uniqueCategories = new Set();
    $('script[data-cookiecategory]').each(function() {
        uniqueCategories.add($(this).data('cookiecategory'));
    });

    uniqueCategories.forEach(category => {
        const categoryDiv = $('<div>').addClass('cookie-category');
        categoryDiv.append($('<p>').text(`Category: ${category}`));
        const acceptButton = $('<button>').text('Accept').addClass('accept-btn').click(() => acceptAllCookies(category));
        const rejectButton = $('<button>').text('Reject').addClass('reject-btn').click(() => rejectAllCookies(category));
        categoryDiv.append(acceptButton, rejectButton);
        categoryListContainer.append(categoryDiv);
    });
}

function acceptAllCookies(category = null) {
    if (category) {
        console.log(`Accepted ${category} cookies`);
        localStorage.setItem(`_${category}_cookie`, 'true');
        enableCookieCategoryScripts(category);
    } else {
        console.log("All cookies accepted");
        $('script[data-cookiecategory]').each(function() {
            const cat = $(this).data('cookiecategory');
            localStorage.setItem(`_${cat}_cookie`, 'true');
            enableCookieCategoryScripts(cat);
        });
    }
    hideCookieBar();
}

function rejectAllCookies(category = null) {
    if (category) {
        console.log(`Rejected ${category} cookies`);
        localStorage.setItem(`_${category}_cookie`, 'false');
        disableCookieCategoryScripts(category);
    } else {
        console.log("All cookies rejected");
        $('script[data-cookiecategory]').each(function() {
            const cat = $(this).data('cookiecategory');
            localStorage.setItem(`_${cat}_cookie`, 'false');
            disableCookieCategoryScripts(cat);
        });
    }
    hideCookieBar();
}

function enableCookieCategoryScripts(category) {
    $('script[data-cookiecategory="' + category + '"]').each(function() {
        if ($(this).attr('type') === 'text/plain') {
            executeScript(this);
        }
    });
}

function disableCookieCategoryScripts(category) {
    $('script[data-cookiecategory="' + category + '"]').each(function() {
        $(this).remove();
    });
}

function executeScript(scriptElement) {
    const scriptTag = document.createElement('script');
    scriptTag.textContent = scriptElement.textContent;
    document.body.appendChild(scriptTag);
    $(scriptElement).attr('type', 'text/javascript');
}

function hideCookieBar() {
    $('#cookiePermissionContent').hide();
}

function checkCookieConsent() {
    const uniqueCategories = new Set();
    $('script[data-cookiecategory]').each(function() {
        uniqueCategories.add($(this).data('cookiecategory'));
    });

    let allConsented = true;
    uniqueCategories.forEach(category => {
        if (localStorage.getItem(`_${category}_cookie`) !== 'true') {
            allConsented = false;
        }
    });

    if (allConsented) {
        hideCookieBar();
    }
}

// Additional functions for the cookie modal (open, close, save settings)
function openCookieSettings() {
    $('#cookieSettingsModal').show();
}

function closeCookieSettingsModal() {
    $('#cookieSettingsModal').hide();
}

function saveCookieSettings() {
    console.log("Cookie settings saved");
    closeCookieSettingsModal();
}
