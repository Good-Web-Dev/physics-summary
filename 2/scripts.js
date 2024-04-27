var contentElements = document.querySelectorAll('.content');

for (var i = 0; i < contentElements.length; i++) {
  contentElements[i].style.visibility = "hidden";
}

  window.setTimeout(function() {
    var loaderBox = document.getElementById("loaderBox");
    loaderBox.style.opacity = "0";
    loaderBox.style.display = "none";
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.visibility = "visible";
      contents[i].style.animation = "fade-in 1s ease-in-out";
    }
  }, 4000);

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "HTML not found.";}
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};
includeHTML();
window.setTimeout(function(){
goIcludeHTML();
}, 3000);

window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById('progress-bar-inner').style.width = progress + '%';
if(progress >= 99){
document.getElementById('progress-bar-inner').style.width = progress + 5 + '%';
}
});

document.querySelector('.marquee a').addEventListener('click', function(){
gtag('event', 'mr_mohammed_zeyada_channel_visit', {
'event_category': 'Link',
'event_label': 'mr_mohammed_zeyada_channel_visit'
});
});

var ratingPopup = document.querySelector('.rating-popup');

var userChoice = false;
var userChoosed = localStorage.getItem('userChoice');

if (userChoosed == undefined) {
  setTimeout(() => {
    ratingPopup.style.animation = "fadeIn 0.5s ease-in";
    ratingPopup.classList.add('show');
  }, 5 * 60 * 1000);
}

function closeRatingPopup() {
gtag('event', 'close_rating_popup', {
'event_category': 'Button',
'event_label': 'close_rating_popup'
});
  ratingPopup.style.animation = "fadeOut 0.5s ease-out";
  setTimeout(function(){
    ratingPopup.classList.remove('show');
  }, 500);
}

function like() {
gtag('event', 'like', {
'event_category': 'Button',
'event_label': 'like'
});
  userChoice = true;
  localStorage.setItem('userChoice', true);
  closeRatingPopup();
}

function dislike() {
gtag('event', 'dislike', {
'event_category': 'Button',
'event_label': 'dislike'
});
  userChoice = true;
  localStorage.setItem('userChoice', true);
  closeRatingPopup();
}

const texts = [
      "سبحان اللّٰه وبحمده، سبحان اللّٰه العظيم",
      "لا إله إلا اللّٰه وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
      "لا حول ولا قوة إلا باللّٰه",
      "اللّٰهم صلّ وسلم وبارك على سيدنا محمد",
      "سبحان اللّٰه، والحمد للّٰه، ولا إله إلا اللّٰه، واللّٰه أكبر",
      "الحمد للّٰه رب العالمين",
      "أستغفر اللّٰه الذي لا إله إلا هو الحي القيوم، وأتوب إليه",
      "اللّٰه أكبر كبيرًا، والحمد للّٰه كثيرًا، وسبحان اللّٰه بكرة وأصيلًا",
      "لا إله إلا أنت سبحانك إني كنت من الظالمين",
      "اللّٰهم أعني على ذكرك، وشكرك، وحسن عبادتك"
    ];

    let previousText = null;

    function getRandomText() {
      const randomIndex = Math.floor(Math.random() * texts.length);
      const newText = texts[randomIndex];

      if (newText === previousText) {
        return getRandomText();
      }

      const footerText = document.getElementById('footer-text');
      footerText.style.opacity = 0;
      setTimeout(() => {
        footerText.textContent = newText;
        footerText.style.opacity = 1;
      }, 500);

      previousText = newText;

      setTimeout(getRandomText, 15000);
    }

    getRandomText();

//localStorage.removeItem('vip');

function vip_prompt(){
var isVip = localStorage.setItem('vip', prompt('أدخل الرمز الخاص:'));
}
var vipInput = localStorage.getItem('vip');
var chaptersContainer = document.querySelector('.chapters-container');
if(vipInput == '505VIP' || vipInput == '505 VIP' || vipInput == '505vip' || vipInput == '505 vip' || vipInput == 'VIP505' || vipInput == 'vip505'){
document.querySelector('.not-with-us').remove();
document.querySelector('.not-with-us-2').remove();
var itr = document.querySelector('.itr');
itr.style.display="none";
itr.removeAttribute('data-title');
var vip2 = document.querySelector('.vip2');
vip2.setAttribute('include-html', '2ndVIP.html');
var vip505 = document.querySelector('.vip-505');
vip505.setAttribute('include-html', '505VIP.html');
var Marquee = document.querySelector('.marquee p');
Marquee.innerHTML = "يـا أهـلًا وسـهـلًا بـأبـي قـحـط، حـيـاك اللّٰه، شـد حـيـلك أسـأل اللّٰه أن يـوفـقـك يـا غـالـي " + `<span style='font-family:monospace'>🫡</span>`;
document.querySelector('.print').style.display = "none";
var downloadPdf = document.querySelector('.download-pdf');
downloadPdf.style.display = 'block';
downloadPdf.setAttribute('onclick', 'location.href = "https://good-web-dev.github.io/physics-summary/2/505vip.pdf"');
}
else if(vipInput == 'VIP' || vipInput == 'vip'){
var itr = document.querySelector('.itr');
itr.style.display="none";
itr.removeAttribute('data-title');
document.querySelector('.not-with-us').remove();
document.querySelector('.not-with-us-2').remove();
var vip2 = document.querySelector('.vip2');
vip2.setAttribute('include-html', '2ndVIP.html');
var vip505 = document.querySelector('.vip');
vip505.setAttribute('include-html', 'VIP.html');
var Marquee = document.querySelector('.marquee p');
var Marquee = document.querySelector('.marquee p');
Marquee.innerHTML = "يـا أهـلًا وسـهـلًا بـأبـي عبـدالرحـمـن، حـيـاك اللّٰه، شـد حـيـلك أسـأل اللّٰه أن يـوفـقـك يـا غـالـي " + `<span style='font-family:monospace'>🫡</span>`;
document.querySelector('.print').style.display = "none";
var downloadPdf = document.querySelector('.download-pdf');
downloadPdf.style.display = 'block';
downloadPdf.setAttribute('onclick', 'location.href = "https://good-web-dev.github.io/physics-summary/2/vip.pdf"');
}

function printBtn(){
const printingConfirm = confirm('⎙ قد يختلف التصميم عند الطباعة، وإذا كنت تستعمل آيفون أو آيباد فعدل تحجيم الصفحة في إعدادات الطباعة إلى ٧٣٪؛ لتطبع لك كل صفحة بشكل كامل.');
if (printingConfirm){
gtag('event', 'print_button_click', {
'event_category': 'Button',
'event_label': 'print_button_click'
});
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=0.45');
print();
}
}

function versionBtn(){
const versionConfirm = confirm('❖ هذا الإصدار رقم: 1.0.\n\n❖ هل تود رؤية تفاصيل الإصدار؟');
if (versionConfirm){
gtag('event', 'version_button_click', {
'event_category': 'Button',
'event_label': 'version_button_click'
});
alert('❖ ملخص لأول ثلاثة فصول من المنهج زائدة الدرس الأول من الفصل الرابع.');
}
}

function colorInversionBtn() {
gtag('event', 'color_inversion__button_click', {
'event_category': 'Button',
'event_label': 'color_inversion__button_click'
});
  document.querySelector('*').classList.toggle('inverted');
document.querySelector('.color-inversion').classList.toggle('activated');
  var isInverted = document.querySelector('*').classList.contains('inverted');
  localStorage.setItem('colorInversionState', isInverted ? 'inverted' : '');
}

var colorInversionState = localStorage.getItem('colorInversionState');
if (colorInversionState === 'inverted') {
  document.querySelector('*').classList.add('inverted');
  document.querySelector('.color-inversion').classList.add('activated');
}

var examBtnClicked = false;

function examBtn() {
gtag('event', 'exam_button_click', {
'event_category': 'Button',
'event_label': 'exam_button_click'
});
  if (!examBtnClicked) {
    alert("في وضع الاختبار، سيتم إخفاء بعض الكلمات التي نحسبها مهمة؛ لتختبر فيها حفظك وتراجع فيها معلوماتك.");
    examBtnClicked = true;
  }
var exam = document.querySelector('.exam');
  exam.classList.toggle('activated');
  var del = document.querySelectorAll('del');
  for (var j = 0; j < del.length; j++) {
if (exam.classList.contains('activated')){
del[j].classList.add('hidden-exam');
}
else{
del[j].classList.remove('hidden-exam');
}
del[j].addEventListener('click', function(){
this.classList.toggle('hidden-exam');
});
}

  var isExamMode = del[0].classList.contains('hidden-exam');
  localStorage.setItem('examModeState', isExamMode ? 'examMode' : '');
}

function goIcludeHTML(){

var examModeState = localStorage.getItem('examModeState');
if (examModeState === 'examMode') {
  examBtnClicked = true;
  examBtn();
}

  ScrollReveal().reveal('.pages',{
    delay: 100,
    reset: true,
    easing: 'ease-in-out',
    duration: 700,
    opacity: 0
  });

var srPages = document.querySelectorAll('.pages');
for (var i = 0; i < srPages.length; i++) {
  (function(index) {
    window.addEventListener('beforeprint', function() {
      srPages[index].style.opacity = '1';
    });
  })(i);
}

const imgTags = document.querySelectorAll('img');

imgTags.forEach((imgTag) => {
  const imgName = imgTag.getAttribute('data-img-name');
  const bgSrc = `url(images/${imgName}.png)`;
  const src = `images/${imgName}.svg`;

  imgTag.style.background = bgSrc;
  imgTag.style.backgroundPosition = 'center';
  imgTag.style.backgroundSize = 'contain';
  imgTag.style.backgroundRepeat = 'no-repeat';
  imgTag.setAttribute('src', src);
});

var laws = document.querySelectorAll('.formulas.laws:not(.inline)');
var inlineLaws = document.querySelectorAll('.formulas.laws.inline');

function typesetFormulas() {
  for (var i = 0; i < laws.length; i++) {
    var law = laws[i].innerHTML;
    laws[i].innerHTML = '$$' + law + '$$';
  }

for (var i = 0; i < inlineLaws.length; i++) {
    var inlineLaw = inlineLaws[i].innerHTML;
    inlineLaws[i].innerHTML = '\\(' + inlineLaw + '\\)';
  }

  MathJax.typesetPromise().then(() => {
  }).catch((err) => {
    console.log('MathJax typesetting failed:', err.message);
  });
}

setTimeout(typesetFormulas, 100);

const pageDivs = document.querySelectorAll('.page');

pageDivs.forEach((pageDiv, index) => {
  if (!pageDiv.classList.contains('no-page-number')) {
    const numberElement = document.createElement('p');
    numberElement.classList.add('page-number');
    const pageNumber = index;
    const easternArabicNumber = pageNumber.toLocaleString('ar-SA');
    numberElement.textContent = easternArabicNumber;
    pageDiv.appendChild(numberElement);
  }
});

function getPageNumberInEasternArabic(pageNumber) {
  const skippedDivs = document.querySelectorAll('.no-page-number').length;
  const adjustedPageNumber = pageNumber - skippedDivs;
  const tensDigit = Math.floor(adjustedPageNumber / 10);
  const onesDigit = adjustedPageNumber % 10;
  let easternArabicNumber = '';
  if (tensDigit > 0) {
    easternArabicNumber += easternArabicNumerals[tensDigit];
  }
  easternArabicNumber += easternArabicNumerals[onesDigit];
  return easternArabicNumber;
}

var pages = document.querySelectorAll('.pages');
var headerTitle = document.querySelector('.header-title');

let previousTitle = '';

const updateHeaderTitle = () => {
  let visiblePage = null;
  pages.forEach(page => {
    const rect = page.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      visiblePage = page;
    }
  });

  if (visiblePage) {
    const dataTitle = visiblePage.getAttribute('data-title');
    if (dataTitle) {
      if (dataTitle.length >= 55) {
        headerTitle.innerHTML = `<span style="font-size: 28px">${dataTitle}</span>`;
      } else {
        headerTitle.textContent = dataTitle;
      }
      if (dataTitle !== previousTitle) {
        headerTitle.style.animation = 'none';
        void headerTitle.offsetWidth;
        headerTitle.style.animation = 'fade-in 0.7s ease-in-out';
      }
      previousTitle = dataTitle;
    } else {
      headerTitle.textContent = previousTitle;
    }
  } else {
    headerTitle.textContent = previousTitle;
  }
};

window.addEventListener('scroll', updateHeaderTitle);

updateHeaderTitle();
}

function updateViewportMetaTag() {
  var viewportMetaTag = document.querySelector('meta[name="viewport"]');
  
  if (screen.width <= 400) {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.35');
  } else if (screen.width >= 1000) {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.55');
  } else {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.45');
  }
}

updateViewportMetaTag();

window.addEventListener('resize', updateViewportMetaTag);
