import classes from './CheckoutProductsToBuy.module.css';
import Context from '../../../store/context'
import { useContext } from 'react';

function CheckoutProductsToBuy () {
    const ctx = useContext(Context);
    const {cartProducts,cartTotalPrice} = ctx;
    const TotalPrice = (cartTotalPrice !== 0 && cartTotalPrice.toString().length === 4) ? cartTotalPrice.toString().charAt(0).concat(',',cartTotalPrice.toString().slice(1)) 
    : (cartTotalPrice !== 0 && cartTotalPrice.toString().length < 4) ? cartTotalPrice : (cartTotalPrice !== 0 && cartTotalPrice.toString().length === 5) ? `${cartTotalPrice.toString().charAt(0)}${cartTotalPrice.toString().charAt(1)}`.concat(',',cartTotalPrice.toString().slice(2)):cartTotalPrice;
    const grandTotal = cartTotalPrice + 50 ;
    const refactoredGrandTotal = (grandTotal !== 0 && grandTotal.toString().length === 4) ? grandTotal.toString().charAt(0).concat(',',grandTotal.toString().slice(1)) 
    : (grandTotal !== 0 && grandTotal.toString().length < 4) ? grandTotal : (grandTotal !== 0 && grandTotal.toString().length === 5) ? `${grandTotal.toString().charAt(0)}${grandTotal.toString().charAt(1)}`.concat(',',cartTotalPrice.toString().slice(2)):cartTotalPrice;
    const orderListItem = cartProducts.map( item => {
        const nameArray = item.product.name.split(' ');
        const orderItemName = nameArray[0];
        const productPrice = (item.product !== '' && item.product.price.toString().length === 4) ? item.product.price.toString().charAt(0).concat(',',item.product.price.toString().slice(1)) 
    : (item.product !== '' && item.product.price.toString().length < 4) ? item.product.price :item.product.price;
        return (
            <li key={item.product.id} className={classes['order__list-item']}>
                <div className={classes['order__list-item__details']}>
                    <img src={`${item.product.image.mobile.slice(1)}`} alt='order-item-img' className={classes['order-item__img']} />
                    <div className={classes['order-item__info']}>
                        <div className={classes['order-item-name']}>{orderItemName}</div>
                        <div className={classes['order-item-price']}>${productPrice}</div>
                    </div>  
                </div>
                <span>x{item.quantity}</span>
            </li>
        )
    })
    return (
        <div className={classes['checkout-products-container']}>
            <ul className={classes['order']}>
                {orderListItem}
            </ul>
            <div>
                <div className={classes['order__total-price-container']}>
                    <span className={classes['order__total-price-title']}>TOTAL</span>
                    <span className={classes['order__total-price']}>${TotalPrice}</span>
                </div>
                <div className={classes['order__total-price-container']}>
                    <span className={classes['order__total-price-title']}>SHIPPING</span>
                    <span className={classes['order__total-price']}>$50</span>
                </div>
                <div className={classes['order__grand-total-price-container']}>
                    <span className={classes['order__total-price-title']}>GRAND TOTAL</span>
                    <span style={{color:'#DF966C'}} className={classes['order__total-price']}>$ {refactoredGrandTotal}</span>
                </div>
            </div>
        </div>
    )
}


export default CheckoutProductsToBuy;