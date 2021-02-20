const navigationBar = document.querySelectorAll(".navigation-link-text");
const navigationBarLinkCafe = navigationBar[0];
const navigationBarLinkHerkunft = navigationBar[1];
const navigationBarLinkShop = navigationBar[2];

const toggleNavigationColor = () => {
    navigationBarLinkCafe.classList.add('navigation-link-text-black');
};

toggleNavigationColor();