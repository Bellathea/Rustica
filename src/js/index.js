const navigationBar = document.querySelectorAll(".navigation-link-text");
const navigationBarLinkCafe = navigationBar[0];
const navigationBarLinkHerkunft = navigationBar[1];
const navigationBarLinkShop = navigationBar[2];
const navigationBarShoppingCart = navigationBar [3];
const navigationBarShoppingCartIcon = document.querySelector(".navigation-shoppingcart");;


// Navbar change styles for scrolling function
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

const headerSection = document.querySelector(".header");

const infoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      changeNavigationColorWhite();
      console.log("entry is intersecting");
    } else {
        changeNavigationColorBlack();
    }
  });
});

infoObserver.observe(headerSection);
