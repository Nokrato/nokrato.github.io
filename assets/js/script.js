'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelectorAll("[data-modal-container]");
const modalCloseBtn = document.querySelectorAll("[data-modal-close-btn]");
const overlay = document.querySelectorAll("[data-overlay]");

// modal variable
const modalImg = document.querySelectorAll("[data-modal-img]");
const modalTitle = document.querySelectorAll("[data-modal-title]");
const modalText = document.querySelectorAll("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function (index) {
  modalContainer[index].classList.toggle("active");
  overlay[index].classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg[0].src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg[0].alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle[0].innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText[0].innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc(0);

  });

}

let projectItem = document.querySelectorAll(".project-item");
for(let i = 0; i < projectItem.length; i++){
  projectItem[i].onclick = ()=>{
    modalTitle[1].style.marginTop = "10px";
    modalTitle[1].innerHTML = document.querySelectorAll(".project-title")[i].innerHTML;
    modalText[1].innerHTML = document.querySelectorAll(".project-category")[i].innerHTML;
    modalImg[1].src = document.querySelectorAll(".project-img")[i].children[1].src;
    modalImg[1].alt = document.querySelectorAll(".project-img")[i].children[1].alt;
    testimonialsModalFunc(1);
  }
}

let blogPostItem = document.querySelectorAll(".blog-post-item");
for(let i = 0; i < blogPostItem.length; i++){
  blogPostItem[i].onclick = ()=>{
    modalTitle[2].innerHTML = document.querySelectorAll(".blog-item-title")[i].innerHTML;
    modalText[2].innerHTML = document.querySelectorAll(".blog-text")[i].innerHTML;
    modalImg[2].src = document.querySelectorAll(".blog-banner-box")[i].children[0].src;
    modalImg[2].alt = document.querySelectorAll(".blog-banner-box")[i].children[0].alt;
    testimonialsModalFunc(2);
  }
}

// add click event to modal close button
for(let i = 0; i < modalCloseBtn.length; i++){
  modalCloseBtn[i].addEventListener("click", ()=>{testimonialsModalFunc(i)});
  overlay[i].addEventListener("click", ()=>{testimonialsModalFunc(i)});
}




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


