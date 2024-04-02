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

window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById('progress-bar-inner').style.width = progress + '%';
});

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
const printingConfirm = confirm('تأكد من أن جميع الصفحات قد تم تحميلها بشكل صحيح قبل الطباعة.\n\nملاحظة: قد يختلف التصميم عند الطباعة، وقد تستغرق الطباعة وقتًا طويلًا؛ لذا تحلَّ بالصبر.');
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
  var tables = document.querySelectorAll('.lessons-terms table');
  for (var i = 0; i < tables.length; i++) {
    var cells = tables[i].querySelectorAll('td:nth-child(2)');
    cells.forEach(function (cell) {
      cell.classList.toggle('hidden-exam');
    });
  }
  var del = document.querySelectorAll('del');
  for (var j = 0; j < del.length; j++) {
    del[j].classList.toggle('hidden-exam');
  }
  var isExamMode = tables[0].querySelector('td:nth-child(2)').classList.contains('hidden-exam');
  localStorage.setItem('examModeState', isExamMode ? 'examMode' : '');
}

var colorInversionState = localStorage.getItem('colorInversionState');
if (colorInversionState === 'inverted') {
  document.querySelector('*').classList.add('inverted');
  document.querySelector('.color-inversion').classList.add('activated');
}

var examModeState = localStorage.getItem('examModeState');
if (examModeState === 'examMode') {
  examBtnClicked = true;
  examBtn();
}

document.querySelector('.marquee a').addEventListener('click', function(){
gtag('event', 'mr_mohammed_zeyada_channel_visit', {
'event_category': 'Link',
'event_label': 'mr_mohammed_zeyada_channel_visit'
});
});

const imgTags = document.querySelectorAll('img');

imgTags.forEach((imgTag) => {
  const imgName = imgTag.getAttribute('data-img-name');

  const bgSrc = `url(images/${imgName}.png) no-repeat`;
  const src = `images/${imgName}.svg`;

  imgTag.style.background = bgSrc;
  imgTag.style.backgroundPosition = 'center';
  imgTag.style.backgroundSize = 'contain';
imgTag.style.backgroundRepeat = 'no-repeat';
  imgTag.setAttribute('src', src);
});

  var divElements = document.getElementsByClassName("pages");

var pElement = document.createElement("p");
pElement.classList.add('printed-from');
pElement.textContent = "تمت طباعة هذا الملف من موقع: https://good-web-dev.github.io/physics-summary/2";

for (var i = 0; i < divElements.length; i++) {
  divElements[i].appendChild(pElement.cloneNode(true));
}

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
        if (dataTitle.length >= 50 ) {
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
