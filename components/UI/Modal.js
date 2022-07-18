import classes from './UI.module.css';

function Modal ({ModalStateHandler, isMenuOpen, isCartOpen}) {
    const modalZIndex =  isMenuOpen ? 99 : isCartOpen ? 100 : 0 ;
    function closeModal () {
        ModalStateHandler()
    }
    return( 
        <div onClick={closeModal} style = {{zIndex:modalZIndex}} className={classes.modal} />
    )
}

export default Modal;