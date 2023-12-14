(function ($) {
  $.fn.cookieSettings = function (options) {
    var settings = $.extend(
      {
        // These are the defaults.
        /*acceptButtonClasses:
          'btn-customRm mat-raised-button mat-button-base mat-primary mr-3',*/
        acceptButtonClasses: 'btn-color btn-customRm mr-3',
        acceptButtonKey: '_accept_cookie',
        acceptButtonClick: 'onClickCookieAccept()',
        rejectButtonClick: 'rejectAll()',
        choosedCookieAcceptButtonClick: 'choosedCookieAccept()',
        buttonTexts: {
          reject: 'Tümünü Reddet',
          accept: 'Tümünü Kabul Et',
          settings: 'Çerez Ayarları',
          choosedCookie: 'Seçimlerimi Onayla',
        },
        description: `Site deneyiminizi iyileştirmek, içerikleri ve reklamları kişiselleştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanıyoruz. Çerezler hakkında detaylı bilgi için <a href="/tr/cookie-policy" target="_blank"> Çerez Politikamızı </a> inceleyebilirsiniz. Kesinlikle gerekli olmayan çerezlerin kullanımına ve çerezler aracılığıyla toplanan kişisel verilerinizin yurt dışına aktarılmasına onay vermek için  <strong>'Tümünü Kabul Et'</strong> butonuna tıklayabilirsiniz.`,
        modalTitle: `Çerez Yönetim Paneli`,
        modalDescription: `Sitemizde kullanılan çerezlerin detaylarına aşağıdan ulaşabilir, ayrıntılı bilgi için  <a href="/tr/cookie-policy" target="_blank"> Çerez Politikamızı </a> inceleyebilirsiniz. Varsayılan ayarları değiştirmek için kutucuklara tıklayabilir ve ardından «Seçimleri Onayla» butonuna tıklayarak seçimlerinizi koruyabilirsiniz.
            `,
        cookieTableTitles: {
          cookie_used_site_title: 'Sitemizde Kullanılan Çerezler',
          cookie_purposes_title: 'Çerezlerin Kullanım Amaçları',
          cookie_status_title: 'Durum',
        },
        requiredCookieContents : [{
          cookie_name: '_lang',
          cookie_provider: 'Borusan Cat',
          cookie_target: 'Dil seçimi için kullanılır.	',
          cookie_time: 'Süresiz',
        },
        {
          cookie_name: '_selectCountry',
          cookie_provider: 'Borusan Cat',
          cookie_target: 'Ülke seçimi bilgisi için kullanılır.',
          cookie_time: 'Süresiz',
        },
    
      ],

      functionalityCookieContents : [{
        cookie_name: 'NID',
        cookie_provider: 'Google',
        cookie_target: 'Google bu çerezi kullanıcının kendine özel ayarları varsa takip için kullanır. Başka bir sayfaya geçilince bu bilgiler ile kıyaslar ve anlar. (ör: dil, arama seçenekleri vs. gibi.)',
        cookie_time: '6 ay',
      },
    ],
    marketingCookieContents: [
    {
    cookie_name: '_ins',
      cookie_provider: 'İnsider',
      cookie_target: 'İnsider tarafından sağlanan çerezlerdir.',
      cookie_time: 'Süresiz',
    },
    
  ],
    performanceAnalyticalCookieContents : [{
      cookie_name: '_ga',
      cookie_provider: 'Google',
      cookie_target: 'Bu çerez, istemci tanımlayıcısı olarak rastgele oluşturulmuş bir sayı atayarak benzersiz kullanıcıları ayırt etmek için kullanılır.',
      cookie_time: '2 ay',
    },
    {
      cookie_name: '_gid',
      cookie_provider: 'Google',
      cookie_target: 'Google Analytics’in sitemizi ziyaret eden kullanıcıları birbirinden ayırabilmek için kullanılır.',
      cookie_time: '24 saat',
    },

  ],

        cookieTypes: {
          required_cookies: 'Zorunlu/Teknik Çerezler',
          performance_analytics_cookies: 'Performans/Analitik Çerezler',
          functional_cookies: 'İşlevsellik Çerezleri',
          marketing_cookies: 'Pazarlama Çerezleri',
        },
        cookieTexts: {
          required_cookies_text: `Zorunlu/teknik çerezler, sitemizin kullanılabilir hale gelmesini sağlamak amacıyla kullanılmaktadır.
                <a class="rm_collapse_link" target_id="collapseRequired" role="button" aria-expanded="false" aria-controls="collapseRequired"> Ayrıntılı Bilgi İçin Tıklayınız. </a> `,
          performance_cookies_text: `Performans/analitik çerezler, Sitemizi kullanımınız hakkında istatiksel bilgi toplamak amacıyla kullanılmaktadır.  
                <a class="rm_collapse_link" target_id="collapsePerformance" role="button" aria-expanded="false" aria-controls="collapsePerformance"> Ayrıntılı Bilgi İçin Tıklayınız. </a> `,
          functional_cookies_text: `İşlevsellik çerezleri, Sitemizde kullanım tercihlerinizi  hatırlamak ve kişiselleştirmek amacıyla kullanılmaktadır. 
                <a class="rm_collapse_link" target_id="collapseFunctional" role="button" aria-expanded="false" aria-controls="collapseFunctional"> Ayrıntılı Bilgi İçin Tıklayınız. </a>  `,
          marketing_cookies_text: `Pazarlama çerezleri, ilgi alanlarınıza göre kişiselleştirilmiş içerik sunmak ve pazarlama faaliyetlerinin etkinliğini ölçmek amaçlarıyla kullanılmaktadır.
                 <a class="rm_collapse_link" target_id="collapseMarketing" role="button" aria-expanded="false" aria-controls="collapseMarketing"> Ayrıntılı Bilgi İçin Tıklayınız. </a>  `,
       
                },
          tableTitles: {
            cookie_name_text:'Çerez Adı',
            provider_text:'Sağlayıcı',
            purposes_of_cookies_text:'Kullanım Amacı',
            period_text:'Süresi',
                }
      },
      options
    )

    if (localStorage.getItem('_accept_cookie') === 'true' 
    && !window.location.href.split(`/`).pop().startsWith('cookie-policy')    
    ) {
      if (
        document.getElementsByClassName('cookie-permission-wrapper') &&
        document.getElementsByClassName('cookie-permission-wrapper')[0]
      ) {
        document.getElementsByClassName(
          'cookie-permission-wrapper'
        )[0].style.display = 'none'
      }
    } else if (
      (localStorage.getItem('_performance_cookie') === 'true' ||
        localStorage.getItem('_functional_cookie') === 'true' ||
        localStorage.getItem('_marketing_cookie') === 'true' ||
        localStorage.getItem('_reject') === 'true') &&
        !window.location.href.split(`/`).pop().startsWith('cookie-policy')
    ) {
      } 
    else {


      let currentHtml = `<div class="cookie-bar">
       <p class="pull-left text-justify-customRm">
          ${settings.description}
       </p>
       <div class="input-group-lg pull-right d-flex-customRm justify-content-center-customRm">
       <a id="accept-cookie"  onclick="${settings.acceptButtonClick}" type="button" class="${settings.acceptButtonClasses}">${settings.buttonTexts.accept}</a>
       <button id="decline-cookie" type="button" class="${settings.acceptButtonClasses}" onclick="${settings.rejectButtonClick}">${settings.buttonTexts.reject}</button>
       <button id="open-cookie-settings" type="button" class="${settings.acceptButtonClasses}">${settings.buttonTexts.settings}</button>
       </div>
   </div>

   <!-- Modal -->
   <div class="modal-customRm fade" id="cookieSettingsModal" role="dialog">
       <div class="modal-dialog-customRm modal-lg-customRm">
       <div class="modal-content-customRm">
           <div class="modal-header-customRm">
               <button type="button" class="close-customRm" data-dismiss="modal"><span class="h2">&times;</span></button>
           <h3 class="modal-title-customRm">
                ${settings.modalTitle}
           </h3>
           </div>
           <div class="modal-body-customRm">
               <div class="row-customRm">
           <div class="col-md-12-customRm">
               <p class="text-justify-customRm">
                ${settings.modalDescription}
               </p>
           </div>

       </div>
       <hr>

       <div class="row-customRm cookie-modal-title">
           <div class="col-md-4-customRm">
               <h4>${settings.cookieTableTitles.cookie_used_site_title}</h4>
           </div>
           <div class="col-md-6-customRm">
               <h4>${settings.cookieTableTitles.cookie_purposes_title}</h4>
           </div>
           <div class="col-md-2-customRm">
               <h4>${settings.cookieTableTitles.cookie_status_title}</h4>
           </div>
       </div>
       <hr>
       <div class="row-customRm collapse-table">
           <div class="col-md-4-customRm">
               <h4 class="font-weight-bold-customRm">
                    ${settings.cookieTypes.required_cookies}
               </h4>
           </div>
           <div class="col-md-6-customRm">
               <p>
                   ${settings.cookieTexts.required_cookies_text}
                </p>
           </div>
           <div class="col-md-2-customRm">
               <!-- Rounded switch --><br>
               <label class="switch pull-right">
                <input id="required-cookie-checkbox" type="checkbox" checked disabled>
                <span class="slider round"></span>
                </label>
           </div>
       </div>
       <div class="collapse-customRm" id="collapseRequired">
         <div class="row-customRm">
            <div class="col-md-12-customRm">

            <div class="table-responsive">
            <table class="table-customRm table-bordered">
                <thead>
                <tr>
                    <th scope="col-customRm"> ${settings.tableTitles.cookie_name_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.provider_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.purposes_of_cookies_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.period_text}
                    </th>
                </tr>
                </thead>
                <tbody>
                  `
      for (var i = 0; i < settings.requiredCookieContents?.length; i++) {
        currentHtml += `<tr>
                    <td>${settings.requiredCookieContents[i]?.cookie_name}</td>
                    <td>${settings.requiredCookieContents[i]?.cookie_provider}</td>
                    <td>${settings.requiredCookieContents[i]?.cookie_target}</td>
                    <td>${settings.requiredCookieContents[i]?.cookie_time}</td>
                </tr>`
      }
      currentHtml += `​

                </tbody>
            </table>
            </div>


        </div>
       </div>
     </div>

       
       <hr>
       <div class="row-customRm collapse-table">
           <div class="col-md-4-customRm">
               <h4 class="font-weight-bold-customRm">
                   ${settings.cookieTypes.performance_analytics_cookies}
               </h4>
           </div>
           <div class="col-md-6-customRm">
               <p>
               ${settings.cookieTexts.performance_cookies_text}
               </p>
           </div>
           <div class="col-md-2-customRm">
               <!-- Rounded switch --><br>
               <label class="switch pull-right">
                <input id="performance-cookie-checkbox" type="checkbox">
                <span class="slider round"></span>
                </label>
           </div>
       </div>

       <div class="collapse-customRm" id="collapsePerformance">
        <div class="row-customRm">
             <div class="col-md-12-customRm">
                <div class="table-responsive">
                <table class="table-customRm table-bordered">
                <thead>
                    <tr>
                    <th scope="col-customRm"> ${settings.tableTitles.cookie_name_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.provider_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.purposes_of_cookies_text}
                    </th>
                    <th scope="col-customRm">${settings.tableTitles.period_text}
                    </th>
                    </tr>
                </thead>
               
                <tbody>
                `
                for (var i = 0; i < settings.performanceAnalyticalCookieContents?.length; i++) {
                  currentHtml += `<tr>
                              <td>${settings.performanceAnalyticalCookieContents[i]?.cookie_name}</td>
                              <td>${settings.performanceAnalyticalCookieContents[i]?.cookie_provider}</td>
                              <td>${settings.performanceAnalyticalCookieContents[i]?.cookie_target}</td>
                              <td>${settings.performanceAnalyticalCookieContents[i]?.cookie_time}</td>
                          </tr>`
                }
                currentHtml += `
                </tbody>
                </table>
                </div>

           </div>
         </div>
       </div>

       <hr>
       <div class="row-customRm collapse-table">
           <div class="col-md-4-customRm">
               <h4 class="font-weight-bold-customRm">${settings.cookieTypes.functional_cookies}</h4>
           </div>
           <div class="col-md-6-customRm">
               <p>
               ${settings.cookieTexts.functional_cookies_text}
               </p>
           </div>
           <div class="col-md-2-customRm">
               <!-- Rounded switch --><br>
               <label class="switch pull-right">
                <input id="functional-cookie-checkbox" type="checkbox">
                <span class="slider round"></span>
                </label>
           </div>
       </div>

       <div class="collapse-customRm" id="collapseFunctional">
         <div class="row-customRm">
             <div class="col-md-12-customRm">
            <div class="table-responsive">
            <table class="table-customRm table-bordered">
                <thead>
                <tr>
                <th scope="col-customRm"> ${settings.tableTitles.cookie_name_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.provider_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.purposes_of_cookies_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.period_text}
                </th>
                </tr>
                </thead>
                <tbody>
                `
                for (var i = 0; i < settings.functionalityCookieContents?.length; i++) {
                  currentHtml += `<tr>
                              <td>${settings.functionalityCookieContents[i]?.cookie_name}</td>
                              <td>${settings.functionalityCookieContents[i]?.cookie_provider}</td>
                              <td>${settings.functionalityCookieContents[i]?.cookie_target}</td>
                              <td>${settings.functionalityCookieContents[i]?.cookie_time}</td>
                          </tr>`
                }
                currentHtml += `
                </tbody>
            </table>
            </div>

         </div>
        </div>
       </div>

       <hr>
       <div class="row-customRm collapse-table">
           <div class="col-md-4-customRm">
               <h4 class="font-weight-bold-customRm">${settings.cookieTypes.marketing_cookies}</h4>
           </div>
           <div class="col-md-6-customRm">
               <p>
               ${settings.cookieTexts.marketing_cookies_text}
               </p>
           </div>
           <div class="col-md-2-customRm">
               <!-- Rounded switch --><br>
               <label class="switch pull-right">
                <input id="marketing-cookie-checkbox" type="checkbox">
                <span class="slider round"></span>
                </label>
           </div>
       </div>

       <div class="collapse-customRm" id="collapseMarketing">
        <div class="row-customRm">
         <div class="col-md-12-customRm">

            <div class="table-responsive">
            <table class="table-customRm table-bordered">
                <thead>
                <tr>
                <th scope="col-customRm"> ${settings.tableTitles.cookie_name_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.provider_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.purposes_of_cookies_text}
                </th>
                <th scope="col-customRm">${settings.tableTitles.period_text}
                </th>
                </tr>
                </thead>
                <tbody>
                `
                for (var i = 0; i < settings.marketingCookieContents?.length; i++) {
                  currentHtml += `<tr>
                              <td>${settings.marketingCookieContents[i]?.cookie_name}</td>
                              <td>${settings.marketingCookieContents[i]?.cookie_provider}</td>
                              <td>${settings.marketingCookieContents[i]?.cookie_target}</td>
                              <td>${settings.marketingCookieContents[i]?.cookie_time}</td>
                          </tr>`
                }
                currentHtml += `
              
                </tbody>
            </table>
            </div>

         </div>
        </div>
       </div>

    </div>
          
       <div class="modal-footer-customRm d-flex-customRm-customRm justify-content-center-customRm">
       <p class="pull-left nobottommargin d-flex-customRm" style="margin-bottom: 0;">
           <button type="button" id="decline-all" class="${settings.acceptButtonClasses}" onclick="${settings.rejectButtonClick}">
              ${settings.buttonTexts.reject}               
           </button>
               <a type="button" id="accept-all" class="${settings.acceptButtonClasses}" onclick="${settings.choosedCookieAcceptButtonClick}">
                   ${settings.buttonTexts.choosedCookie}
               </a>      
       </p>
       </div>
          

    </div>
</div>
</div>
    </div>
</div> `;

      curren2tHtml = document.getElementById(
        'cookiePermissionContent'
      ).innerHTML = currentHtml;
      if (
        localStorage.getItem('_performance_cookie') === 'true' ||
        localStorage.getItem('_functional_cookie') === 'true' ||
        localStorage.getItem('_marketing_cookie') === 'true' ||
        localStorage.getItem('_reject') === 'true'
      ) {
        hideCookiebar()
      };
      ['open-cookie-settings', 'open-cookie-settings-link'].forEach((id) => {
        document.getElementById(id)?.addEventListener('click', () => {
          var cookieModal = document.getElementById('cookieSettingsModal')
          if (cookieModal.classList.contains('show')) {
            document.getElementById('cookieSettingsModal').style.display =
              'none'
            document
              .getElementById('cookieSettingsModal')
              .classList.remove('show')
            document.body.classList.remove('modal-open-customRm')
          } else {
            document.getElementById('cookieSettingsModal').style.display =
              'block'
            document.getElementById('cookieSettingsModal').classList.add('show')
            document.body.classList.add('modal-open-customRm')
          }
        })
      });
      [
        { id: 'performance-cookie-checkbox', key: '_performance_cookie' },
        { id: 'functional-cookie-checkbox', key: '_functional_cookie' },
        { id: 'marketing-cookie-checkbox', key: '_marketing_cookie' },
      ].forEach((value) => {
        if (localStorage.getItem(value.key) === 'true')
          document.getElementById(value.id).checked = true
      })

      document
        .querySelector('#cookieSettingsModal')
        .addEventListener('click', (event) => {
          if (event?.target?.id == 'cookieSettingsModal') {
            document.getElementById('cookieSettingsModal').style.display =
              'none'
            document
              .getElementById('cookieSettingsModal')
              .classList.remove('show')
            document.body.classList.remove('modal-open-customRm')
          }
        })
      document
        .querySelector('#cookieSettingsModal .close-customRm')
        .addEventListener('click', () => {
          document.getElementById('cookieSettingsModal').style.display = 'none'
          document
            .getElementById('cookieSettingsModal')
            .classList.remove('show')
          document.body.classList.remove('modal-open-customRm')
        })
      document.querySelectorAll('.rm_collapse_link').forEach((el) => {
        el.addEventListener('click', () => {
          document
            .querySelectorAll('.collapse-customRm')
            .forEach((collapseEl) => {
              collapseEl.id == el.getAttribute('target_id') &&
                collapseEl.style.display != 'block'
                ? (collapseEl.style.display = 'block')
                : (collapseEl.style.display = 'none')
            })
        })
      })
    }
    setTimeout(() => {
      $('#cookieReadMoreBtn').click(function () {
        var btnTitle = $(this).attr('btnTitle')
        if (btnTitle == 'readmore') {
          $(this).attr('btnTitle', 'readless')
          $(this).html(`_accept_cookie_readmore`)
          $('#textCookie').removeClass('cookie-text-ellipsis')
        } else if (btnTitle == 'readless') {
          $(this).attr('btnTitle', 'readmore')
          $('#textCookie').addClass('cookie-text-ellipsis')
          $(this).html(`_accept_cookie_readmore`)
        } else {
          $(this).attr('btnTitle', 'readless')
          $('#textCookie').removeClass('cookie-text-ellipsis')
          $(this).html(`_accept_cookie_readless`)
        }
      })
    }, 800)

    return this.css({
      acceptButtonClasses: settings.acceptButtonClasses,
      acceptButtonKey: settings.acceptButtonKey,
      acceptButtonClick: settings.acceptButtonKey,
      rejectButtonClick: settings.acceptButtonKey,
      buttonTexts: {
        reject: settings.buttonTexts.reject,
        accept: settings.buttonTexts.reject,
        settings: settings.buttonTexts.reject,
        choosedCookie: settings.buttonTexts.choosedCookie,
      },
      description: settings.description,
      cookieTableTitles: {
        reject: settings.cookieTableTitles.cookie_used_site_title,
        accept: settings.cookieTableTitles.cookie_purposes_title,
        accept: settings.cookieTableTitles.cookie_status_title,
      },
    })
  }
})(jQuery)

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
  
  _manageExistingScripts();

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

  _manageExistingScripts()
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

  _manageExistingScripts()
  hideCookiebar()
  hideCookieSettingsModal()
}

function hideCookiebar() {
  document.getElementById('cookiePermissionContent').style.display = 'none';

}

function hideCookieSettingsModal() {
  if (document.getElementById('cookieSettingsModal')){
  document.getElementById('cookieSettingsModal').style.opacity = 0;
  document.getElementById('cookieSettingsModal').style.pointerEvents = "none";
  }
}

function showCookieSettingsModal() {

  document.getElementById('cookieSettingsModal').style.opacity = 1;
  document.getElementById('cookieSettingsModal').style.pointerEvents = "auto";
  document.getElementById('cookieSettingsModal').style.position = "fixed";

}

var _config = {

  'page_scripts': true,
  'cookie_name': 'cc_cookie',
  'cookie_expiration': 182,                 // default: 6 months (in days)
  'script_selector': 'data-cookiecategory'
};

var _inArray = function(arr, value){
  return arr.indexOf(value);
}
var _createNode = function(type){
  var el = document.createElement(type);
  if(type === 'button'){
      el.setAttribute('type', type);
  }
  return el;
}
var all_categories = [];

var
_cookieconsent = {},
saved_cookie_content = {};


var _manageExistingScripts = function(must_enable_categories){

  var scripts = document.querySelectorAll('script[' + _config.script_selector + ']');
  var accepted_categories = ["required"];
  var rejected_categories = [];
  
  if(localStorage.getItem('_performance_cookie') === 'true' ){
    accepted_categories.push("analytics")
  }
  if(localStorage.getItem('_functional_cookie') === 'true' ){
    accepted_categories.push("functional")
  }
  if(localStorage.getItem('_marketing_cookie') === 'true' ){
    accepted_categories.push("marketing")
  }

  /**
   * Load scripts (sequentially), using a recursive function
   * which loops through the scripts array
   * @param {Element[]} scripts scripts to load
   * @param {number} index current script to load
   */
  var _loadScripts = function(scripts, index){

      if(index < scripts.length){

          var curr_script = scripts[index];
          var curr_script_category = curr_script.getAttribute(_config.script_selector);
     
          if(_inArray(accepted_categories, curr_script_category) > -1){
            
              curr_script.type = curr_script.getAttribute('data-type') || 'text/javascript';
              curr_script.removeAttribute(_config.script_selector);

              var src = curr_script.getAttribute('data-src');
              src && curr_script.removeAttribute('data-src');

              var fresh_script = _createNode('script');
              fresh_script.textContent = curr_script.innerHTML;

              (function(destination, source){
                  var attributes = source.attributes;
                  var len = attributes.length;
                  for(var i=0; i<len; i++){
                                         var attr_name = attributes[i].nodeName;
                      destination.setAttribute(attr_name , source[attr_name] || source.getAttribute(attr_name));
                  }
              })(fresh_script, curr_script);
           
              src ? (fresh_script.src = src) : (src = curr_script.src);
              if(src){
           
                  if(fresh_script.readyState) {  // only required for IE <9
                      fresh_script.onreadystatechange = function() {
                          if (fresh_script.readyState === "loaded" || fresh_script.readyState === "complete" ) {
                              fresh_script.onreadystatechange = null;
                              _loadScripts(scripts, ++index);
                          }
                      };
                  }else{  // others
                      fresh_script.onload = function(){
                          fresh_script.onload = null;
                          _loadScripts(scripts, ++index);
                      };
                  }
              }

              // Replace current "sleeping" script with the new "revived" one
              curr_script.parentNode.replaceChild(fresh_script, curr_script);

              /**
               * If we managed to get here and scr is still set, it means that
               * the script is loading/loaded sequentially so don't go any further
               */
              if(src) return;
          }

          // Go to next script right away
          _loadScripts(scripts, ++index);
      }
  }

  _loadScripts(scripts, 0);
}