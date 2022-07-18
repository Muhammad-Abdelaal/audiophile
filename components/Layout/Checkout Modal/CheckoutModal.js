import Card from '../../UI/Card';
import classes from './CheckoutModal.module.css';
import Context from '../../../store/context';
import { useContext } from 'react';
import Button from '../../UI/Button';

const websiteBody = document.querySelector('body');

function CheckoutModal() {

    websiteBody.style.overflowY = 'hidden';

    const ctx = useContext(Context);
    const cartTotalPrice = ctx.cartTotalPrice
    const grandTotal = cartTotalPrice + 50 ;
    const refactoredGrandTotal = (grandTotal !== 0 && grandTotal.toString().length === 4) ? grandTotal.toString().charAt(0).concat(',',grandTotal.toString().slice(1)) 
    : (grandTotal !== 0 && grandTotal.toString().length < 4) ? grandTotal : (grandTotal !== 0 && grandTotal.toString().length === 5) ? `${grandTotal.toString().charAt(0)}${grandTotal.toString().charAt(1)}`.concat(',',cartTotalPrice.toString().slice(2)):cartTotalPrice;

    const checkoutItems = ctx.cartProducts.map ( item => {
        const nameArray = item.product.name.split(' ');
        const orderItemName = nameArray[0];
        const productPrice = (item.product !== '' && item.product.price.toString().length === 4) ? item.product.price.toString().charAt(0).concat(',',item.product.price.toString().slice(1)) 
        : (item.product !== '' && item.product.price.toString().length < 4) ? item.product.price :item.product.price;
        return (
            <li className={classes['order__list-item']} key={item.product.id}>
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
        <div className={classes['checkout-modal']}> 
            <Card className={classes['checkout-order']} >
                <h1>THANK YOU</h1>
                <h1>FOR YOUR ORDER</h1>
                <div style={{margin:'20px 0px' , color: '#7E7E7E'}} >You will receive an email confirmation shortly.</div>
                <div className={classes['checkout-order-container']}>
                    <ul className={classes['checkout-order-list']}>
                      {checkoutItems}
                    </ul>
                    <div className={classes['checkout-order-grandtotal']}>
                        <div className={classes['checkout-order-grandtotal-text']}>GRAND TOTAL</div>
                        <div className={classes['checkout-order-grandtotal-price']}>$ {refactoredGrandTotal}</div>
                    </div>
                </div>
                <Button buttonUsage = 'checkout-modal' buttonText = 'BACK TO HOME' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = {'rgb(227, 145, 98)'} />
            </Card>
        </div>
    )
}

export default CheckoutModal;