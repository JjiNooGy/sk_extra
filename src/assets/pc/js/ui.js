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
const selectBoxElements = document.querySelectorAll(".FamilySite");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

// function selectOption(optionElement) { //선택옵션 셀렉트 박스에 반영하기
//   const selectBox = optionElement.closest(".FamilySite");
//   const selectedElement = selectBox.querySelector(".selected-value");
//   selectedElement.textContent = optionElement.textContent;
// }

selectBoxElements.forEach((selectBoxElement) => {
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
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".FamilySite");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll(".FamilySite");

  allSelectBoxElements.forEach((boxElement) => {
    boxElement.classList.remove("active");
  });
});

// 모바일 사업자정보 펼침 토글
function moreView() {
  let menu = document.querySelector(".info-detail");
  menu.classList.toggle("active");
}

//인풋박스 초기화버튼 커스터마이징
var btnClear = document.querySelectorAll(".btnClear");
btnClear.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentNode.querySelector("input").value = "";
  });
});

// qna
var acc = document.getElementsByClassName("q-box");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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
