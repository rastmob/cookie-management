document.addEventListener("DOMContentLoaded", function() {

  if (localStorage.getItem("_accept_cookie") === "true" || localStorage.getItem("_reject") === "true") {
      hideCookiebar()
      hideCookieSettingsModal();
  } else if (
      localStorage.getItem("_performance_cookie") === "true" ||
      localStorage.getItem("_functional_cookie") === "true" ||
      localStorage.getItem("_marketing_cookie") === "true"
  ) {

      if (document.getElementById('cookiePermissionContent')) {
          hideCookiebar()
      }
  } else {

      document.getElementById('cookiePermissionContent').style.display = 'block';
  }
  
      var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content =  document.getElementById(this.id+'cookie_content')
  if (content.style.display === "contents") {
    content.style.display = "none";
  } else {
    content.style.display = "contents";
  }
});
}

});


function onClickCookieAccept() {
  localStorage.setItem('_accept_cookie', 'true');

  document.getElementById("performance-cookie-checkbox").checked = true;
  document.getElementById("functional-cookie-checkbox").checked = true;
  document.getElementById("marketing-cookie-checkbox").checked = true;

  choosedCookieAccept();
}

function choosedCookieAccept() {

  //var isRequiredChecked = document.getElementById("required_cookie");
  var isRequiredChecked = true;
  var isPerformanceChecked = document.getElementById("performance-cookie-checkbox").checked;
  var isFunctionalChecked = document.getElementById("functional-cookie-checkbox").checked;
  var isMarketingChecked = document.getElementById("marketing-cookie-checkbox").checked;


  if (isRequiredChecked) {
      localStorage.setItem("_required_cookie", "true")
  }
  if (isPerformanceChecked) {
      localStorage.setItem("_performance_cookie", "true")
  }
  if (isFunctionalChecked) {
      localStorage.setItem("_functional_cookie", "true")
  }
  if (isMarketingChecked) {
      localStorage.setItem("_marketing_cookie", "true")
  }
  if (!isPerformanceChecked && !isFunctionalChecked && !isMarketingChecked) {
      localStorage.setItem("_reject", "true");
  }
  if (isPerformanceChecked && isFunctionalChecked && isMarketingChecked) {
    localStorage.setItem("_accept_cookie", "true");
  }
  
  hideCookiebar()
  hideCookieSettingsModal()

}

function rejectAll() {

  document.getElementById("performance-cookie-checkbox").checked = false;
  document.getElementById("functional-cookie-checkbox").checked = false;
  document.getElementById("marketing-cookie-checkbox").checked = false;
  window.localStorage.clear();
  localStorage.setItem("_reject", "true");
  localStorage.setItem("_required_cookie", "true");
  hideCookiebar()
  hideCookieSettingsModal()
}

function hideCookiebar() {
  document.getElementById('cookiePermissionContent').style.display = 'none';

}

function hideCookieSettingsModal() {
  document.getElementById('openModal-cookie').style.opacity = 0;
  document.getElementById('openModal-cookie').style.pointerEvents = "none";
}

function showCookieSettingsModal() {

  document.getElementById('openModal-cookie').style.opacity = 1;
  document.getElementById('openModal-cookie').style.pointerEvents = "auto";


}