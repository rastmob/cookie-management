$(document).ready(function() {
    // Generate the list of cookie categories dynamically
    generateCookieCategoryList();

    // Event listeners for cookie bar buttons
    $('#accept-all-cookies').on('click', acceptAllCookies);
    $('#decline-cookies').on('click', rejectAllCookies);
    $('#cookie-settings').on('click', openCookieSettings);

    // Check if cookie consent has already been given
    checkCookieConsent();
});

function generateCookieCategoryList() {
    const uniqueCategories = new Set();
    $('script[data-cookiecategory]').each(function() {
        uniqueCategories.add($(this).data('cookiecategory'));
    });

    const categoryListContainer = $('#cookieCategoryList');
    categoryListContainer.empty();

    uniqueCategories.forEach(category => {
        categoryListContainer.append($('<li>').text(category));
    });
}

function acceptAllCookies() {
    // Logic to accept all cookies
    console.log("All cookies accepted");
    setCookieConsent(true);
    hideCookieBar();
}

function rejectAllCookies() {
    // Logic to reject all cookies
    console.log("All cookies rejected");
    setCookieConsent(false);
    hideCookieBar();
}

function openCookieSettings() {
    $('#cookieSettingsModal').show();
}

function closeCookieSettingsModal() {
    $('#cookieSettingsModal').hide();
}

function saveCookieSettings() {
    // Logic to save specific cookie settings
    console.log("Cookie settings saved");
    closeCookieSettingsModal();
}

function hideCookieBar() {
    $('#cookiePermissionContent').hide();
}

function checkCookieConsent() {
    // Check local storage or cookie for existing consent
    var consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven === 'true') {
        hideCookieBar();
    }
}

function setCookieConsent(consent) {
    // Save the consent state in local storage or cookie
    localStorage.setItem('cookieConsent', consent);
}
