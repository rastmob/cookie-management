document.addEventListener('DOMContentLoaded', function() {
    RMGenerateCookieCategoryList();
    RMCheckCookieConsent();
});

function RMGenerateCookieCategoryList() {
    const categoryListContainer = document.getElementById('RMcookieCategoryList');
    categoryListContainer.innerHTML = '';

    // Create a table
    const table = document.createElement('table');
    categoryListContainer.appendChild(table);

    // Add table header
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);
    ['Script Name', 'Description', 'Category', 'Actions'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    // Add table body
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    document.querySelectorAll('script[data-rastmobile-cookiecategory]').forEach(script => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        // Script Name
        const tdName = document.createElement('td');
        tdName.textContent = script.getAttribute('data-scriptname') || 'Unnamed Script';
        tr.appendChild(tdName);

        // Script Description
        const tdDescription = document.createElement('td');
        tdDescription.textContent = script.getAttribute('data-scriptdescription') || 'No description provided';
        tr.appendChild(tdDescription);

        // Cookie Category
        const tdCategory = document.createElement('td');
        tdCategory.textContent = script.getAttribute('data-rastmobile-cookiecategory');
        tr.appendChild(tdCategory);

        // Actions (Accept/Reject Buttons)
        const tdActions = document.createElement('td');
        tr.appendChild(tdActions);
        
        const acceptButton = document.createElement('button');
        acceptButton.textContent = 'Accept';
        acceptButton.onclick = function() { RMAcceptCookies(script.getAttribute('data-rastmobile-cookiecategory')); };
        tdActions.appendChild(acceptButton);

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.onclick = function() { RMRejectCookies(script.getAttribute('data-rastmobile-cookiecategory')); };
        tdActions.appendChild(rejectButton);
    });
}



function createCategoryHeader(category) {
    const header = document.createElement('h4');
    header.textContent = `Category: ${category}`;
    return header;
}

function createScriptDetails(script) {
    const scriptName = script.getAttribute('data-scriptname') || 'Unnamed Script';
    const scriptUrl = script.getAttribute('data-scripturl') || 'No URL provided';
    const scriptDetails = document.createElement('p');
    scriptDetails.textContent = `Script: ${scriptName}, URL: ${scriptUrl}`;
    return scriptDetails;
}

function createCategoryButtons(category) {
    const buttonContainer = document.createElement('div');
    const acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept';
    acceptButton.className = 'RM-accept-btn';
    acceptButton.onclick = function() { RMAcceptCookies(category); };
    buttonContainer.appendChild(acceptButton);

    const rejectButton = document.createElement('button');
    rejectButton.textContent = 'Reject';
    rejectButton.className = 'RM-reject-btn';
    rejectButton.onclick = function() { RMRejectCookies(category); };
    buttonContainer.appendChild(rejectButton);

    return buttonContainer;
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
        console.log(`Accepted ${category}`);
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
    let allConsented = categories.length > 0; // Assume true only if categories exist

    categories.forEach(script => {
        const category = script.getAttribute('data-rastmobile-cookiecategory');
        if (localStorage.getItem(`RM_${category}_cookie`) !== 'true') {
            allConsented = false;
        }
    });

    if (!allConsented) {
        document.getElementById('RMcookiePermissionContent').style.display = 'flex';
    } else {
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
    RMGenerateCookieCategoryList(); // Regenerate the list every time the modal is opened
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
