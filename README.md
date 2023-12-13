# Cookie Management

## Installation

The following CSS file is imported.

```sh
<link rel="stylesheet" href="style/csscookie.css">
```

Between the <body> ... </body> tags, the following code is added, and the relevant JavaScript file is imported.

```sh
<body> 
   <div id="cookiePermissionContent">
       <div class="cookie-bar"></div>
   </div>
   <script src="style/javascriptcookie.js"></script>
</body>
```

In the next step, the following script should be added. A popup screen will be displayed for cookie management. The fields below can be dynamically updated to display as desired.


```sh
<script>
   $('document').ready(function() {
     $("#coveredPage").cookieSettings({
       description: `We use cookies to ...`,
       buttonTexts: {
         reject: "Reject All",
         accept: "Accept All",
         settings: "Cookie Settings",
         choosedCookie: "Confirm My Choices"
       },
       modalTitle: `Cookie Management Panel`,
       modalDescription: `You can access details about the cookies used on our site below and review our Cookie Policy for more detailed information...`,
       cookieTypes: {
         required_cookies: "Required/Technical Cookies",
         performance_analytics_cookies: "Performance/Analytical Cookies",
         functional_cookies: "Functional Cookies",
         marketing_cookies: "Marketing Cookies"
       },

       requiredCookieContents: [{
         cookie_name: 'exampleCookieName',
         cookie_provider: 'exampleCookieProvider',
         cookie_target: 'examplePurposeofUse',
         cookie_time: 'exampleCookieTime',
       }, ],
       performanceAnalyticalCookieContents: [{}],
       functionalityCookieContents: [{}],
       marketingCookieContents: [{}],

       cookieTableTitles: {
         cookie_used_site_title: "Cookies Used on Our Website",
         cookie_purposes_title: "Purposes of Cookie Usage",
         cookie_status_title: "Status",
       },
       cookieTexts: {
         required_cookies_text: `Required/technical cookies are used to ...
               <a class="rm_collapse_link" target_id="collapseRequired" role="button" aria-expanded="false" aria-controls="collapseRequired"> Detail </a> `,
         performance_cookies_text: `Performance/analytical cookies are used to ...
               <a class="rm_collapse_link" target_id="collapsePerformance" role="button" aria-expanded="false" aria-controls="collapsePerformance"> Detail </a> `,
         functional_cookies_text: `Functional cookies are used to ...
               <a class="rm_collapse_link" target_id="collapseFunctional" role="button" aria-expanded="false" aria-controls="collapseFunctional"> Detail </a>  `,
         marketing_cookies_text: `Marketing cookies are used to ...
                <a class="rm_collapse_link" target_id="collapseMarketing" role="button" aria-expanded="false" aria-controls="collapseMarketing"> Detail </a>  `,
       },
       tableTitles: {
         cookie_name_text: 'Cookie Name',
         provider_text: 'Provider',
         purposes_of_cookies_text: 'Purposes Of Cookie',
         period_text: 'Time',
       }
     });
   });
 </script>

```


## Managing Scripts

All scripts to be managed should have their types set as **type="text/plain"**. Then, the **data-cookiecategory="<category>"** attribute should be added.

For **<category>**, you can use 4 category types: **required, analytics, functional,** and **marketing**. An example usage is as follows:

```sh
<!-- Inline script -->
<script type="text/plain” data-cookiecategory="marketing">
    console.log("marketing script");
</script>
```


```sh
<!-- External script -->
<script async type="text/plain" data-cookiecategory="analytics" src="analytics.js"></script>
```
