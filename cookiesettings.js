const languageData = {
    'en': {
        message: "We use cookies to enhance your experience. By continuing, you agree to our use of cookies.",
        accept: "Accept All",
        reject: "Reject All",
        settings: "Cookie Settings",
        moreInfo: "Learn More",
        cookieModalTitle: "Cookie Settings",
        scriptName: "Script Name",
        scriptDescription: "Description",
        scriptCategory: "Category",
        scriptActions: "Actions"
    },
    'fr': {
        message: "Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre utilisation des cookies.",
        accept: "Accepter tout",
        reject: "Rejeter tout",
        settings: "Paramètres des cookies",
        moreInfo: "En savoir plus",
        cookieModalTitle: "Paramètres des cookies",
        scriptName: "Nom du script",
        scriptDescription: "Description",
        scriptCategory: "Catégorie",
        scriptActions: "Actions"
    }, 
    'es': {
        message: "Usamos cookies para mejorar tu experiencia. Al continuar, aceptas el uso de cookies.",
        accept: "Aceptar Todo",
        reject: "Rechazar Todo",
        settings: "Configuración de Cookies",
        moreInfo: "Más Información",
        cookieModalTitle: "Configuración de Cookies",
        scriptName: "Nombre del Script",
        scriptDescription: "Descripción",
        scriptCategory: "Categoría",
        scriptActions: "Acciones"
    },
    'de': {
        message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie fortfahren, stimmen Sie unserer Verwendung von Cookies zu.",
        accept: "Alles akzeptieren",
        reject: "Alles ablehnen",
        settings: "Cookie-Einstellungen",
        moreInfo: "Mehr erfahren",
        cookieModalTitle: "Cookie-Einstellungen",
        scriptName: "Skriptname",
        scriptDescription: "Beschreibung",
        scriptCategory: "Kategorie",
        scriptActions: "Aktionen"
    },
    'tr': {
        message: "Deneyiminizi iyileştirmek için çerezleri kullanıyoruz. Devam ederek çerez kullanımımızı kabul etmiş oluyorsunuz.....",
        accept: "Tümünü Kabul Et",
        reject: "Tümünü Reddet",
        settings: "Çerez Ayarları",
        moreInfo: "Daha Fazla Bilgi",
        cookieModalTitle: "Cookie Ayarları",
        scriptName: "Script Adı",
        scriptDescription: "Açıklama",
        scriptCategory: "Kategorisi",
        scriptActions: "Aksiyonlar"
    },'el': {
        message: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Συνεχίζοντας, συμφωνείτε με τη χρήση μας των cookies.",
        accept: "Αποδοχή όλων",
        reject: "Απόρριψη όλων",
        settings: "Ρυθμίσεις Cookies",
        moreInfo: "Μάθετε περισσότερα",
        cookieModalTitle: "Ρυθμίσεις Cookies",
        scriptName: "Όνομα Script",
        scriptDescription: "Περιγραφή",
        scriptCategory: "Κατηγορία",
        scriptActions: "Ενέργειες"
    },
    'nl': {
        message: "We gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan, gaat u akkoord met ons gebruik van cookies.",
        accept: "Alles accepteren",
        reject: "Alles afwijzen",
        settings: "Cookie-instellingen",
        moreInfo: "Meer leren",
        cookieModalTitle: "Cookie-instellingen",
        scriptName: "Scriptnaam",
        scriptDescription: "Beschrijving",
        scriptCategory: "Categorie",
        scriptActions: "Acties"
    },
    'ar': {
        message: "نستخدم الكوكيز لتحسين تجربتك. بالاستمرار، أنت توافق على استخدامنا للكوكيز.",
        accept: "قبول الكل",
        reject: "رفض الكل",
        settings: "إعدادات الكوكيز",
        moreInfo: "معرفة المزيد",
        cookieModalTitle: "إعدادات الكوكيز",
        scriptName: "اسم السكريبت",
        scriptDescription: "الوصف",
        scriptCategory: "الفئة",
        scriptActions: "الإجراءات"
    },  
    'pt': {
        message: "Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com o nosso uso de cookies.",
        accept: "Aceitar tudo",
        reject: "Rejeitar tudo",
        settings: "Configurações de cookies",
        moreInfo: "Saiba mais",
        cookieModalTitle: "Configurações de cookies",
        scriptName: "Nome do script",
        scriptDescription: "Descrição",
        scriptCategory: "Categoria",
        scriptActions: "Ações"
    },'it': {
        message: "Utilizziamo i cookie per migliorare la tua esperienza. Continuando, accetti il nostro uso dei cookie.",
        accept: "Accetta Tutto",
        reject: "Rifiuta Tutto",
        settings: "Impostazioni Cookie",
        moreInfo: "Ulteriori Informazioni",
        cookieModalTitle: "Impostazioni Cookie",
        scriptName: "Nome dello Script",
        scriptDescription: "Descrizione",
        scriptCategory: "Categoria",
        scriptActions: "Azioni"
    }
};

let currentLanguage = 'en';

function updateConsentText() {
    const texts = languageData[currentLanguage];
    const cookieMessageDiv = document.getElementById('RMcookieMessage');

    // Update the text while keeping the link
    cookieMessageDiv.innerHTML = texts.message + ' <a href="https://rastmobile.com/gizlilik-politikasi/" target="_blank">' + texts.moreInfo + '</a>';

    // Update other elements
    document.getElementById('RMacceptButton').textContent = texts.accept;
    document.getElementById('RMrejectButton').textContent = texts.reject;
    document.getElementById('RMsettingsButton').textContent = texts.settings;
    document.getElementById('RMCookieModalTitle').textContent = texts.cookieModalTitle;
    // Continue updating other elements as necessary
}


function setLanguage(lang) {
    if (languageData[lang]) {
        currentLanguage = lang;
        updateConsentText();
    }
}

document.addEventListener('DOMContentLoaded', function () {
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

    const texts = languageData[currentLanguage];
    [texts.scriptName, texts.scriptDescription, texts.scriptCategory, texts.scriptActions].forEach(text => {
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
        acceptButton.onclick = function () { RMAcceptCookies(script.getAttribute('data-rastmobile-cookiecategory')); };
        tdActions.appendChild(acceptButton);

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.onclick = function () { RMRejectCookies(script.getAttribute('data-rastmobile-cookiecategory')); };
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
    acceptButton.onclick = function () { RMAcceptCookies(category); };
    buttonContainer.appendChild(acceptButton);

    const rejectButton = document.createElement('button');
    rejectButton.textContent = 'Reject';
    rejectButton.className = 'RM-reject-btn';
    rejectButton.onclick = function () { RMRejectCookies(category); };
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
    const categories = new Set();
    document.querySelectorAll('script[data-rastmobile-cookiecategory]').forEach(script => {
        categories.add(script.getAttribute('data-rastmobile-cookiecategory'));
    });

    categories.forEach(category => {
        localStorage.setItem(`RM_${category}_cookie`, 'true');
    });

    RMCheckCookieConsent();
    closeCookieSettingsModal(); // Optionally close the modal after action
}

function RMRejectAllCookies() {
    const categories = new Set();
    document.querySelectorAll('script[data-rastmobile-cookiecategory]').forEach(script => {
        categories.add(script.getAttribute('data-rastmobile-cookiecategory'));
    });

    categories.forEach(category => {
        localStorage.setItem(`RM_${category}_cookie`, 'false');
    });

    RMCheckCookieConsent();
    closeCookieSettingsModal(); // Optionally close the modal after action
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
