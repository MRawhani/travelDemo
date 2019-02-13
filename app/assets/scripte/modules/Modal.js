import $ from 'jquery'
class Modal{
    constructor(){
        this.openModelButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModelButton = $(".modal--close");
        this.events();
    }
    events(){
        //clicking the open modal button
        this.openModelButton.click(this.openModal.bind(this));

        //clicking the close modal button 
        this.closeModelButton.click(this.closeModel.bind(this));
        //pushes any key in the keyboard
        $(document).keyup(this.keyPrssHandler.bind(this));
    }
    keyPrssHandler(e){
        if(e.keyCode == 27){
            this.closeModel();
        }
    }
    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }
    closeModel(){
        this.modal.removeClass("modal--is-visible")
    }
}
export default Modal;