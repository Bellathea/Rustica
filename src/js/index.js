// Navbar change styles for scrolling function
const navigationBar = document.querySelectorAll(".navigation-link-text");
const navigationBarLinkCafe = navigationBar[0];
const navigationBarLinkHerkunft = navigationBar[1];
const navigationBarLinkShop = navigationBar[2];
const navigationBarShoppingCart = navigationBar [3];
const navigationBarShoppingCartIcon = document.querySelector(".navigation-shoppingcart");;

const changeNavigationColorBlack = () => {
  navigationBarLinkCafe.classList.remove("navigation-link-text");
  navigationBarLinkCafe.classList.add("navigation-link-text-black");
  navigationBarLinkHerkunft.classList.remove("navigation-link-text");
  navigationBarLinkHerkunft.classList.add("navigation-link-text-black");
  navigationBarLinkShop.classList.remove("navigation-link-text");
  navigationBarLinkShop.classList.add("navigation-link-text-black");
  navigationBarShoppingCart.classList.remove("navigation-link-text");
  navigationBarShoppingCart.classList.add("navigation-link-text-black");
  navigationBarShoppingCartIcon.classList.remove("navigation-shoppingcart");
  navigationBarShoppingCartIcon.classList.add("navigation-shoppingcart-black");

};

const changeNavigationColorWhite = () => {
  navigationBarLinkCafe.classList.add("navigation-link-text");
  navigationBarLinkCafe.classList.remove("navigation-link-text-black");
  navigationBarLinkHerkunft.classList.add("navigation-link-text");
  navigationBarLinkHerkunft.classList.remove("navigation-link-text-black");
  navigationBarLinkShop.classList.add("navigation-link-text");
  navigationBarLinkShop.classList.remove("navigation-link-text-black");
  navigationBarShoppingCart.classList.add("navigation-link-text");
  navigationBarShoppingCart.classList.remove("navigation-link-text-black");
  navigationBarShoppingCartIcon.classList.add("navigation-shoppingcart");
  navigationBarShoppingCartIcon.classList.remove("navigation-shoppingcart-black");
};

//change NavBar by Scrolling
const headerSection = document.querySelector(".header");
const infoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      changeNavigationColorWhite();
    } else {
        changeNavigationColorBlack();
    }
  });
});

infoObserver.observe(headerSection);

//Display mobile Menu by clicking the burger icon
const navigationMobileIconBurger = document.querySelector(".navigation-mobile-icon-burger");
const navigationMobileIconClose = document.querySelector(".navigation-mobile-icon-close");
const mobileNavigationBackground = document.querySelector(".navigation-mobile");
const mobileNavigationList = document.querySelector(".navigation-mobile-list");
const documentBody = document.body;

const openMobileNavigation = () => {
    console.log(documentBody);
    documentBody.style.overflow = "hidden";
    mobileNavigationList.style.visibility = "visible";
    mobileNavigationBackground.style.visibility = "visible";
    navigationMobileIconBurger.style.visibility = "hidden";
    navigationMobileIconClose.style.visibility = "visible";
};

const closeMobileNavigation = () => {
    documentBody.style.overflow = "visible";
    mobileNavigationList.style.visibility = "hidden";
    mobileNavigationBackground.style.visibility = "hidden";
    navigationMobileIconBurger.style.visibility = "visible";
    navigationMobileIconClose.style.visibility = "hidden";

}

navigationMobileIconBurger.addEventListener('click', openMobileNavigation);
navigationMobileIconClose.addEventListener('click', closeMobileNavigation);