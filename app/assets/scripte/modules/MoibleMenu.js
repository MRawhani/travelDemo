import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteheader= $(".site-header");
        this.menuIcon= $(".site-header--menu-icon");
        this.menuContent = $(".site-header--menu-content");
        this.events();
    }

    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this)); 
        // the this in the fuction callback will change to the menuIocn, so we
        //use th bind method
    }

    toggleTheMenu(){
        this.menuContent.toggleClass("site-header--menu-content--is-visible");
        this.siteheader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header--menu-icon--close-x");
        
    }
}

export default MobileMenu;