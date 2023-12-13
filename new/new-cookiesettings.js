document.addEventListener('DOMContentLoaded', function() {
    RMGenerateCookieCategoryList();
    RMCheckCookieConsent();
});

function RMGenerateCookieCategoryList() {
    const categoryListContainer = document.getElementById('RMcookieCategoryList');
    categoryListContainer.innerHTML = '';

    const scripts = document.querySelectorAll('script[data-rastmobile-cookiecategory]');
    const uniqueCategories = new Set();

    scripts.forEach(function(script) {
        uniqueCategories.add(script.getAttribute('data-rastmobile-cookiecategory'));
    });

    uniqueCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'RM-cookie-category';

        const categoryText = document.createElement('p');
        categoryText.textContent = `Category: ${category}`;
        categoryDiv.appendChild(categoryText);

        const acceptButton = document.createElement('button');
        acceptButton.textContent = 'Accept';
        acceptButton.className = 'RM-accept-btn';
        acceptButton.addEventListener('click', function() { RMAcceptAllCookies(category); });
        categoryDiv.appendChild(acceptButton);

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.className = 'RM-reject-btn';
        rejectButton.addEventListener('click', function() { RMRejectAllCookies(category); });
        categoryDiv.appendChild(rejectButton);

        categoryListContainer.appendChild(categoryDiv);
    });
}

function RMAcceptAllCookies(category = null) {
    // ... Accept cookies logic ...
}

function RMRejectAllCookies(category = null) {
    // ... Reject cookies logic ...
}

function RMCheckCookieConsent() {
    // ... Check cookie consent logic ...
}

function RMHideCookieBar() {
    const cookieBar = document.getElementById('RMcookiePermissionContent');
    if (cookieBar) {
        cookieBar.style.display = 'none';
    }
}

// ... Other necessary functions ...
