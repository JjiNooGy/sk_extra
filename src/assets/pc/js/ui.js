console.log("loading");

function filterArcoddian() {
  //필터아코디언
  var fltBtn = document.querySelectorAll(".filter-item");
  fltBtn.forEach(function (flt) {
    flt.addEventListener("click", function () {
      console.log("sadasd");
      let fltBtnPtn = flt.parentNode.querySelector(".filter-item");
      flt.classList.toggle("hide");
    });
  });
}

// Tab
function tabContent2(evt, carStatus) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(carStatus).style.display = "block";
  evt.currentTarget.className += " active";
}
//
//
//

// 탭 안의 탭 - 호출함수 필요함
function tabInTab() {
  console.log("call tabSample");
  const tabItem = document.querySelectorAll(".tab_item_dpt1");
  const tabInner = document.querySelectorAll(".tab_inner_dpt1");

  tabItem.forEach((tab, idx) => {
    tab.addEventListener("click", function () {
      tabInner.forEach((inner) => {
        inner.classList.remove("active");
      });

      tabItem.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem[idx].classList.add("active");
      tabInner[idx].classList.add("active");
    });
  });
}

// 패밀리사이트 셀렉트박스 스크립트
const familyElements = document.querySelectorAll(".FamilySite");

function toggleSelectBox(familyBox) {
  familyBox.classList.toggle("active");
}

familyElements.forEach((familyBoxElement) => {
  familyBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(familyBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".FamilySite");

  if (isSelect) {
    return;
  }

  const allFamilyElements = document.querySelectorAll(".FamilySite");

  allFamilyElements.forEach((boxElement) => {
    boxElement.classList.remove("active");
  });
});

/******************************
///////팝업스크립트
******************************/
var target = document.querySelectorAll(".open-pop");
var btnPopClose = document.querySelectorAll(".popup-wrap .pop-close");
var targetID;
// 팝업 열기
for (var i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function () {
    targetID = this.getAttribute("data-rel");
    document.querySelector(targetID).style.display = "block";
  });
}

// 팝업 닫기
for (var j = 0; j < target.length; j++) {
  btnPopClose[j].addEventListener("click", function () {
    //    document.querySelector(targetID).style.display = 'none';
    this.parentNode.parentNode.parentNode.style.display = "none";
  });
}

/******************************
///////드롭다운
******************************/
const draptBoxElements = document.querySelectorAll(".dropdown-box");

function toggleSelectBox(drapBox) {
  drapBox.classList.toggle("active");
}

function selectOption(optionElement) {
  //선택옵션 셀렉트 박스에 반영하기
  const drapBox = optionElement.closest(".dropdown-box");
  const drapedElement = drapBox.querySelector(".droped-value");
  drapedElement.textContent = optionElement.textContent;
}

draptBoxElements.forEach((selectBoxElement) => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isFool = targetElement.classList.contains("select") || targetElement.closest(".dropdown-box");

  if (isFool) {
    return;
  }

  const allDriptBoxElements = document.querySelectorAll(".dropdown-box");

  allDriptBoxElements.forEach((boxElement) => {
    boxElement.classList.remove("active");
  });
});
