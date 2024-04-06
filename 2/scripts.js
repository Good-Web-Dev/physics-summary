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
  }, 3000);

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
}, 1500);

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
const versionConfirm = confirm('هذا الإصدار الأول.');
if (versionConfirm){
gtag('event', 'version_button_click', {
'event_category': 'Button',
'event_label': 'version_button_click'
});
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
  
  document.querySelector('.exam').classList.toggle('activated');
  var del = document.querySelectorAll('del');
  for (var j = 0; j < del.length; j++) {
    del[j].classList.toggle('hidden-exam');
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


const pages = document.querySelectorAll('.pages');
const headerTitle = document.querySelector('.header-title');

let previousTitle = '';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      const dataTitle = entry.target.getAttribute('data-title');
      if (dataTitle) {
        if (dataTitle.length >= 55) {
          headerTitle.innerHTML = `<span style="font-size: 28px">${dataTitle}</span>`;
        } else {
          headerTitle.textContent = dataTitle;
        }
        previousTitle = dataTitle;
      } else {
        headerTitle.textContent = previousTitle;
      }
    }
  });
}, observerOptions);

pages.forEach(page => {
  observer.observe(page);
});
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
