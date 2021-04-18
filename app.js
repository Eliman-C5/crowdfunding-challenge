// Variables

const $body = document.querySelector("body");

// Navbar
const $principalSection = document.querySelector(".principal-section");
const $header = document.querySelector(".section-header");
const $navbar = document.querySelector(".section-navbar");
const $navbarList = `
<ul class="navbar-list">
  <li>About</li>
  <li>Discover</li>
  <li>Get Started</li>
</ul>`;
const hamburgerMenu = `<img src="images/icon-hamburger.svg" alt="hamburger menu" class="hamburger-menu" />`;
const closeNavbar = `<img src="images/icon-close-menu.svg" alt="close menu" />`;
const $successNavbarMobile = document.querySelector(".success-navbar-mobile");

// Buttons
const $gotItBtn = document.querySelector(".got-it-btn");
const $stockBtn = document.querySelectorAll(".stock-btn");
const $positiveBtn = document.querySelector(".positive-btn");
const $bookmark = document.querySelector(".bookmark");

//success
const $successBg = document.querySelector(".success-background");
const $successModal = $successBg.querySelector(".success-modal");
const $successOption = $successBg.querySelector(".success-option");
const $optionIcon = $successOption.querySelector(".option-icon");
const $successReward = document.querySelectorAll(".success-reward-positive");
const $optionCircle = document.querySelectorAll(".option-circle-reward");
const $newCircle = document.querySelectorAll(".option-circle-reward .new-circle");
const $rewardPledge = document.querySelectorAll(".option-reward-pledge");
const $pledgeTitle = document.querySelectorAll(".success-box-stock > .title");
const $pledgeBtn = document.querySelectorAll(".option-reward-pledge .pledge-btn-positive");

//This function removes green circles, green borders and pledge-section.
const removeActive = () => {
    //This removes green circles in "success-option"
    $newCircle.forEach(child => {
      child.classList.remove("active");
    })

    //This removes green borders in "success-option"
    $successReward.forEach(reward => {
      reward.classList.remove("active");
    })

    //This removes pledge-section in "success-option"
    $rewardPledge.forEach(pledge => {
      pledge.classList.remove("active");
    })
}

// if the bookmark box has "bookmark-active" class, it´ll change its color and text
const changeBookmark = () => {

  // When it has the following class: "bookmark-active"
  if (!$bookmark.classList.contains("bookmark-active")) {

    $bookmark.innerHTML = `
      <img src="images/icon-bookmarked.svg" alt="icon of bookmark" class="bookmark-img">
      <button class="bookmark-btn bookmark-btn-active">Bookmarked</button>
    `;
    $bookmark.classList.add("bookmark-active");

  } else {
    // When it doesn´t have the following class: "bookmark-active"
    $bookmark.innerHTML = `
      <img src="images/icon-bookmark.svg" alt="icon of bookmark" class="bookmark-img">
      <button class="bookmark-btn">Bookmark</button>
    `;
    $bookmark.classList.remove("bookmark-active");

  }

}

// Function that makes dark background go away and translates boxes in "success section" of HTML document
const close = (e) => {

  $successBg.style.display = "none";

  // These are buttons in "success-option" that make "success-option" element disappear
  if (e.target.matches(".pledge-btn-positive")) {
    $successOption.style.transform = "translateY(-150%)";
  }

  // This is a "X" icon that makes "success-option" element disappear
  if (e.target.matches(".option-icon")) {
    $successOption.style.transform = "translateY(-150%)";
  }

  // This is a button that makes "success-modal" element disappear
  if (e.target.matches(".got-it-btn")) {
    $successModal.style.transform = "translateY(-100%)";
  }

  removeActive();
}

// Function that makes dark background come back.
const open = (e) => {
  $successBg.style.display = "block";

  //When window size is less than 850px and target is ".positive-btn" element, "success-option" element makes an appearance.
  if (window.matchMedia("(max-width: 850px)").matches && e.target.matches(".positive-btn")) {
    return $successOption.style.transform = "translateY(-20%)";
  }

  //When target is ".positive-btn" element, "success-option" element makes an appearance.
  if (e.target.matches(".positive-btn")) {
    $successOption.style.transform = "translateY(-30%)";
  }

  //When window size is less than 380px and target is ".hamburger-menu" element, "success-navbar-mobile" element makes an appearance.
  if (window.matchMedia("(max-width: 380px)").matches && e.target.matches(".hamburger-menu")) {
    $successNavbarMobile.style.display = "block";
    return $successNavbarMobile.style.transform = "translateY(-830%)";
  }

  //When window size is less than 420px and target is ".hamburger-menu" element, "success-navbar-mobile" element makes an appearance.
  if (window.matchMedia("(max-width: 420px)").matches && e.target.matches(".hamburger-menu")) {
    $successNavbarMobile.style.display = "block";
    return $successNavbarMobile.style.transform = "translateY(-770%)";
  }

  //When target is ".hamburger-menu" element, "success-navbar-mobile" element makes an appearance.
  if (e.target.matches(".hamburger-menu")) {
    $successNavbarMobile.style.display = "block";
    $successNavbarMobile.style.transform = "translateY(-730%)";
  }
}

//This function calls removeActive function and get a parametes called index. This parameter is the index got from a forEach method. This index is passed to arrays of circles, pledge-sections and success-option
const activeReward = (index) => {
    removeActive();
    $rewardPledge[index].classList.toggle("active");
    $newCircle[index].classList.toggle("active");
    $successReward[index].classList.toggle("active");
}

// Function to change elements if window changes its size. This function uses matchMedia methods to check the size.
const watchResize = () => {

  if (window.matchMedia("(max-width: 600px)").matches) {

    if (!$navbar.classList.contains("navbar-mobile")) {
      $principalSection.style.justifyContent = "space-between";
      $navbar.classList.add("navbar-mobile");
      $navbar.innerHTML = hamburgerMenu;
    }

  }

  if (window.matchMedia("(min-width: 601px)").matches) {

    if ($navbar.classList.contains("navbar-mobile")) {
      $principalSection.style.justifyContent = "space-around";
      $navbar.classList.remove("navbar-mobile");
      $navbar.innerHTML = $navbarList;
    }

    if ($navbar.classList.contains("close-navbar")) {
      $navbar.classList.remove("close-navbar");
      $successBg.style.display = "none";
      // $successNavbarMobile.style.transform = "translateY(-1000%)";
    }

  }

}

//When you click an "stock-btn" element, this element bring "succes-modal" and uses "open" method which makes "success-background" appears.
$stockBtn.forEach((btn, index )=> {
  btn.addEventListener("click", e => {

    e.preventDefault();
    
    if (window.matchMedia("(min-width: 701px)").matches && index !== 2) {
      index === 0? $successModal.style.transform = "translateY(250%)": "";
      index === 1? $successModal.style.transform = "translateY(325%)": "";
      open(e);
    }

    if (window.matchMedia("(max-width: 700px)").matches && index !== 2) {
      index === 0? $successModal.style.transform = "translateY(300%)": "";
      index === 1? $successModal.style.transform = "translateY(380%)": "";
      open(e);
    }

    if (window.matchMedia("(max-width: 600px)").matches && index !== 2) {
      index === 0? $successModal.style.transform = "translateY(470%)": "";
      index === 1? $successModal.style.transform = "translateY(590%)": "";
      open(e);
    }

  })
})

//This is a button in "success-modal" which makes "success-modal" and "success-background" go away 
$gotItBtn.addEventListener("click", e => {
  e.preventDefault();
  close(e);
})

//When you click "positive-btn", it uses open method
$positiveBtn.addEventListener("click", e => {
  e.preventDefault();
  open(e);
})

//This an icon with letter "X" that when you click, "success-option" leaves.
$optionIcon.addEventListener("click", e => {
  close(e);
})

//When you "click" in a circle this calls activeReward method which receives index of array that will allow to active circle that you selected
$optionCircle.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    activeReward(index);
  })
})

//When you "click" a title in a pledge-section this calls activeReward method which receives index of array that will allow to active pledge-section that you selected
$pledgeTitle.forEach((title, index) => {
  title.addEventListener("click", () => {
    activeReward(index);
  })
})

//When you "click" a button in a pledge-section this calls close method which receives the parameter "e" that will allow to close pledge-section that you selected
$pledgeBtn.forEach(btn => {
  btn.addEventListener("click", e => {
    close(e);
  })
})

//When navbar-mobile is active and you click "hamburger-menu" element, it change hamburger menu icon and add an icon with letter "X" 
$navbar.addEventListener("click", e => {
  //Change hamburger menu for "X" icon
  if (e.target.matches(".hamburger-menu")) {
    $navbar.innerHTML = closeNavbar;
    $navbar.classList.add("close-navbar");
    $header.classList.add("close-navbar");
    open(e);
  }

  //Change "X" icon for hamburger menu
  if (e.target.matches(".close-navbar img")) {
    $successBg.style.display = "none";
    $successNavbarMobile.style.display = "none";
    $navbar.innerHTML = hamburgerMenu;
    $navbar.classList.remove("close-navbar");
    $header.classList.remove("close-navbar");
  }
})

$bookmark.addEventListener("click", e => {
  e.preventDefault();
  changeBookmark();
})

document.addEventListener("DOMContentLoaded", watchResize);
window.addEventListener("resize", watchResize);