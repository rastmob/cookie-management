document.addEventListener('DOMContentLoaded', function() {
    RMGenerateCookieCategoryList();
    RMCheckCookieConsent();
});

function RMGenerateCookieCategoryList() {
    const categoryListContainer = document.getElementById('RMcookieCategoryList');
    categoryListContainer.innerHTML = '';

    const uniqueCategories = new Set();
    document.querySelectorAll('script[data-rastmobile-cookiecategory]').forEach(script => {
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
        acceptButton.onclick = function() { RMAcceptCookies(category); };
        categoryDiv.appendChild(acceptButton);

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.className = 'RM-reject-btn';
        rejectButton.onclick = function() { RMRejectCookies(category); };
        categoryDiv.appendChild(rejectButton);

        categoryListContainer.appendChild(categoryDiv);
    });
}

function RMAcceptCookies(category) {
    localStorage.setItem(`RM_${category}_cookie`, 'true');
    RMCheckCookieConsent();
}

function RMRejectCookies(category) {
    localStorage.setItem(`RM_${category}_cookie`, 'false');
    RMCheckCookieConsent();
}

function RMAcceptAllCookies() {
    const categories = document.querySelectorAll('script[data-rastmobile-cookiecategory]');
    categories.forEach(script => {
        const category = script.getAttribute('data-rastmobile-cookiecategory');
        localStorage.setItem(`RM_${category}_cookie`, 'true');
    });
    RMHideCookieBar();
}

function RMRejectAllCookies() {
    const categories = document.querySelectorAll('script[data-rastmobile-cookiecategory]');
    categories.forEach(script => {
        const category = script.getAttribute('data-rastmobile-cookiecategory');
        localStorage.setItem(`RM_${category}_cookie`, 'false');
    });
    RMHideCookieBar();
}

function RMCheckCookieConsent() {
    const categories = document.querySelectorAll('script[data-rastmobile-cookiecategory]');
    let allConsented = true;
    categories.forEach(script => {
        const category = script.getAttribute('data-rastmobile-cookiecategory');
        if (localStorage.getItem(`RM_${category}_cookie`) !== 'true') {
            allConsented = false;
        }
    });

    if (allConsented) {
        RMHideCookieBar();
    }
}

function RMHideCookieBar() {
    const cookieBar = document.getElementById('RMcookiePermissionContent');
    if (cookieBar) {
        cookieBar.style.display = 'none';
    }
}

function openCookieSettings() {
    const modal = document.getElementById('RMcookieSettingsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeCookieSettingsModal() {
    const modal = document.getElementById('RMcookieSettingsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function saveCookieSettings() {
    // Implement the logic to save specific cookie settings
    console.log("Cookie settings saved");
    closeCookieSettingsModal();
}
