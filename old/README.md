# Cookie Management

## Installation

### Step 1: Define Cookie Categories in HTML Scripts

```sh
<script type="text/plain" data-cookiecategory="marketing">
    // Marketing-related script
</script>

<script type="text/plain" data-cookiecategory="analytics">
    // Analytics-related script
</script>
```

### Step 2: Import jQuery

```sh
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### Step 3: Import cookiesettings.js

```sh
<script src="path/to/cookiesettings.js"></script>
```

### Step 4: Add Cookie Bar and Modal HTML

```sh
<!-- Cookie Bar -->
<div id="cookiePermissionContent" class="cookie-bar">
    <p class="cookie-message">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        <a href="/cookie-policy" target="_blank">Learn more</a>.
    </p>
    <div class="cookie-buttons">
        <button id="accept-all-cookies" onclick="acceptAllCookies()">Accept All</button>
        <button id="decline-cookies" onclick="rejectAllCookies()">Reject All</button>
        <button id="cookie-settings" onclick="openCookieSettings()">Cookie Settings</button>
    </div>
</div>


<!-- Cookie Settings Modal -->
<div id="cookieSettingsModal" class="cookie-modal">
    <div class="cookie-modal-content">
        <div class="cookie-modal-header">
            <span class="cookie-modal-title">Cookie Settings</span>
            <button onclick="closeCookieSettingsModal()" class="cookie-modal-close-btn">&times;</button>
        </div>
        <div class="cookie-modal-body">
            <p>Adjust your cookie settings below:</p>
            <ul id="cookieCategoryList">
                <!-- Cookie categories will be dynamically inserted here -->
            </ul>
        </div>
        <div class="cookie-modal-footer">
            <button onclick="saveCookieSettings()">Save Settings</button>
        </div>
    </div>
</div
```

## Managing Scripts

All scripts to be managed should have their types set as **type="text/plain"**. Then, the **data-cookiecategory="categoryType"** attribute should be added.

For **data-cookiecategory**, you can use 4 category types: **required, analytics, functional,** and **marketing**. An example usage is as follows:

```sh
<!-- Inline script -->
<script type="text/plain" data-cookiecategory="marketing">
    console.log("marketing script");
</script>
```


```sh
<!-- External script -->
<script async type="text/plain" data-cookiecategory="analytics" src="analytics.js"></script>
```
