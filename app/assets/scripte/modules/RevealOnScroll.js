import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll{
    constructor(className, offSet){
        this.itemsToReveal = $(className);/**collections of elements */
        this.offSet = offSet;
        this.hideInitially();
        this.createWayPoints(offSet);
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }
    createWayPoints(offSet){

        this.itemsToReveal.each(function(){
           
            var current= this;
            new Waypoint({
                 //by default waypoint runs when the top of element hits the view port
                //we set teh this before cuz this is an opject so the this will change inside it
                element : current, /**what element we target V. 046 */
                handler: function(){
                   $(current).addClass("reveal-item--is-visible")//this will add for evey single item
                    // but this line this.itemsToReveal.addClass("reveal-item"); will add for the element at once
                },
                offset: offSet

            });
        });
    }
}

export default RevealOnScroll;