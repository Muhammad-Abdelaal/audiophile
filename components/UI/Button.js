import { useContext, useState } from 'react';
import classes from './UI.module.css';
import Context from '../../store/context';
import { Link, useNavigate} from 'react-router-dom';
const websiteBody = document.querySelector('body');

function Button (props) {
    
    const [textColor, setTextColor] = useState(props.color);
    const navigate = useNavigate()
    const ctx = useContext(Context);
    const totalPriceForItem = props.product ? props.product.price * props.quantity : '';

    // Handeling the hover effect 
    function hoverHandler () {
        setTextColor( props.hoverColor ? props.hoverColor : props.color );
    }
    function mouseOutHandler () {
        setTextColor(props.color);
    }
    // ENDING CHECKOUT
    function showOrderInfo () {}
    // sending product data

    function sendProductData () {
        ctx.addItemToCart({product:props.product, quantity: props.quantity, itemTotalPrice:totalPriceForItem});
    }

    function closeCheckoutModal () {
        ctx.checkoutStateHandler(false);
        ctx.clearCart()
        navigate('/home');
        websiteBody.style.overflowY = 'scroll';
        window.scrollTo(0, 0)
    }
    
    return (
        props.buttonUsage === 'see-product' ?
            <Link to= {`/product/${props.itemSlug}`} onMouseOver={hoverHandler} onMouseOut = {mouseOutHandler} style={{background:`${props.backgroundColor}`, border:`${props.border}`}} className={classes['see-product-btn-container']}>
                <span style={{background:`${props.afterBackgroundColor}`}} className={classes['see-product-btn-container__after']}/>
                <p style={{color:`${textColor}`}} className={classes['see-product-btn']} >{props.buttonText}</p>
            </Link>
        : props.buttonUsage === 'checkout' ?
            <Link to= {`/checkout`}  onMouseOver={hoverHandler} onMouseOut = {mouseOutHandler} style={{background:`${props.backgroundColor}`, border:`${props.border}`, marginLeft:'50%', marginTop:'15px', transform:'translate(-50%)'}} className={classes['see-product-btn-container']}>
                <span style={{background:`${props.afterBackgroundColor}`}} className={classes['see-product-btn-container__after']}/>
                <p style={{color:`${textColor}`}} className={classes['see-product-btn']} >{props.buttonText}</p>
            </Link>
        : props.buttonUsage === 'show-order' ?
            <button  style = {{marginLeft:'50%' , transform: 'translate(-50%)', background:`${props.backgroundColor}`, border:`${props.border}`}} onClick={showOrderInfo }  onMouseOver={hoverHandler} onMouseOut = {mouseOutHandler}  className={classes['see-product-btn-container']}>
                <span style={{background:`${props.afterBackgroundColor}`}} className={classes['see-product-btn-container__after']}/>
                <p style={{color:`${textColor}`}} className={classes['see-product-btn']} >{props.buttonText}</p>
            </button>
            :props.buttonUsage === 'checkout-modal' ?
            <button onClick={closeCheckoutModal} onMouseOver={hoverHandler} onMouseOut = {mouseOutHandler} style={{background:`${props.backgroundColor}`, border:`${props.border}`, marginLeft:'50%', marginTop:'25px', transform:'translate(-50%)'}} className={classes['see-product-btn-container']}>
                <span style={{background:`${props.afterBackgroundColor}`}} className={classes['see-product-btn-container__after']}/>
                <p style={{color:`${textColor}`}} className={classes['see-product-btn']} >{props.buttonText}</p>
            </button> :
        <button  onClick={sendProductData}  onMouseOver={hoverHandler} onMouseOut = {mouseOutHandler} style={{background:`${props.backgroundColor}`, border:`${props.border}`}} className={classes['see-product-btn-container']}>
            <span style={{background:`${props.afterBackgroundColor}`}} className={classes['see-product-btn-container__after']}/>
            <p style={{color:`${textColor}`}} className={classes['see-product-btn']} >{props.buttonText}</p>
        </button>    
        
        
    )
}

export default Button