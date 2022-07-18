import classes from './Cart.module.css';
import Context from '../../../store/context';
import { useContext, useCallback } from 'react';
import Card from '../../UI/Card';
import QuantityInput from '../Quantity Input/QuantityInput';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
const websiteBody = document.querySelector('body');

function Cart ({cartStateHandler}) {
    websiteBody.style.overflowY = 'hidden';
    const ctx = useContext(Context);
    const {cartProducts, cartQuantity, cartTotalPrice} = ctx;
    const TotalPrice = (cartTotalPrice !== 0 && cartTotalPrice.toString().length === 4) ? cartTotalPrice.toString().charAt(0).concat(',',cartTotalPrice.toString().slice(1)) 
    : (cartTotalPrice !== 0 && cartTotalPrice.toString().length < 4) ? cartTotalPrice : (cartTotalPrice !== 0 && cartTotalPrice.toString().length === 5) ? `${cartTotalPrice.toString().charAt(0)}${cartTotalPrice.toString().charAt(1)}`.concat(',',cartTotalPrice.toString().slice(2)):cartTotalPrice;

    const quantityIncrement = useCallback((product) => {
        ctx.addItemToCart(product)
    }, [ctx]);

    const quantityDecrement = useCallback((productId) => {
        ctx.removeItemFromCart(productId)
    }, [ctx]);

    function clearCart () {
        ctx.clearCart()
    }

    const cartListItem = cartProducts.map( item => {
        const nameArray = item.product.name.split(' ');
        const cartItemName = nameArray[0];
        const productPrice = (item.product !== '' && item.product.price.toString().length === 4) ? item.product.price.toString().charAt(0).concat(',',item.product.price.toString().slice(1)) 
    : (item.product !== '' && item.product.price.toString().length < 4) ? item.product.price :item.product.price;
        return (
            <li key={item.product.id} className={classes['cart__list-item']}>
                <div className={classes['cart__list-item__details']}>
                    <img src={`${item.product.image.mobile.slice(1)}`} alt='cart-item-img' className={classes['cart__list-item__img']} />
                    <div className={classes['cart__list-item__info']}>
                        <div className={classes['cart__list-item-name']}>{cartItemName}</div>
                        <div className={classes['cart__list-item-price']}>${productPrice}</div>
                    </div>  
                </div>
                <QuantityInput  cartQuantityIncrement = {quantityIncrement} cartQuantityDecrement = {quantityDecrement} cartProductQuantity = {item.quantity} usagePlace = 'cart' productData = {item} />
            </li>
        )
    })
    
    return (
        cartQuantity === 0 ?
        <Card className={classes.cart}>
            <div className={classes['cart-empty']}>CART EMPTY</div> 
        </Card>
        :
        <Card className={classes.cart}>
            <div className={classes['cart__quantity-remove-all']}>  
                <span className={classes['cart__quantity-text']} >{`Cart ( ${cartQuantity} )`}</span>
                <Link to = '/home'> <span onClick={clearCart} className={classes['cart__remove-all']}>REMOVE ALL</span> </Link> 
            </div>
            <ul className={classes['cart__list']}>
                {cartListItem}
            </ul>
            <div className={classes['cart__total-price-container']}>
                <span className={classes['cart__total-price-title']}>TOTAL</span>
                <span className={classes['cart__total-price']}>${TotalPrice}</span>
            </div>
            <Button buttonUsage = 'checkout' buttonMargin = '20px auto 0px auto' buttonText = 'CHECKOUT' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = {'rgb(227, 145, 98)'} />
        </Card>
    )
}

export default Cart