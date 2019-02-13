import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll'
class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $(".site-header"); //this is a jquery object, [0]For getting the dom object
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWayPoints();
        //highliting

        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWayPoints();
        this.addSmoothScrolling();
        this.refreshWaypoint();
    }
    refreshWaypoint(){
        this.lazyImages.on('load',function(){
            Waypoint.refreshAll();
        });
    }
    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }
    createHeaderWayPoints() {

        var that = this;
        new Waypoint({
            //by default waypoint runs when the top of element hits the view port
            //we set teh this before cuz this is an opject so the this will change inside it
            element: this.headerTriggerElement[0],
            /**what element we target to touch the top View port V. 046 */
            handler: function (direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark") //this will add for evey single item
                    // but this line this.itemsToReveal.addClass("reveal-item"); will add for the element at once
                    //this means what the element that ttakes the action
                } else {
                    that.siteHeader.removeClass("site-header--dark")
                }
            }

        });

    }
    createPageSectionWayPoints() {
        var that = this;
        this.pageSections.each(function () {
            var current = this; //this points to the dom elemnt
            new Waypoint({
                //by default waypoint runs when the top of element hits the view port
                //we set teh this before cuz this is an opject so the this will change inside it
                element: current,
                /**what element we target to touch the top View port V. 046 */
                handler: function (direction) {
                    if (direction == "down") {
                        /**
                         * the data matching link is custo attribute created for plugins
                         * here we create our own plugin for highliting the section when scroll
                         * V. 049.
                         */
                        var matchingHeaderLink = current.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    } 

                },

                offset: "18%"

            });

            new Waypoint({
                //by default waypoint runs when the top of element hits the view port
                //we set teh this before cuz this is an opject so the this will change inside it
                element: current,
                /**what element we target to touch the top View port V. 046 */
                handler: function (direction) {
                    if (direction == "up") {
                        /**
                         * the data matching link is custo attribute created for plugins
                         * here we create our own plugin for highliting the section when scroll
                         * V. 049.
                         */
                        var matchingHeaderLink = current.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    } 

                },

                offset: "-60%"

            });

        });

    }
}
export default StickyHeader;