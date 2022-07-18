import classes from './QuantityInput.module.css';
import React from 'react';


const QuantityInput = React.memo(({usagePlace, productQuantity, cartProductQuantity, productData, cartQuantityIncrement, cartQuantityDecrement, quantityIncrement, quantityDecrement }) => {
 //{product:props.product, quantity: props.quantity, itemTotalPrice:totalPriceForItem}
    const quantity = usagePlace === 'product-page' ? productQuantity : usagePlace === 'cart' ? cartProductQuantity : '';
    
    function increasingQuantity () {
        if ( usagePlace === 'product-page') {
            quantityIncrement();
        }
        if ( usagePlace === 'cart') {
            const updatedItem = {...productData, quantity:1, itemTotalPrice:productData.product.price}
            cartQuantityIncrement(updatedItem)
        }
    }
    
    function decreasingQuantity () {
        if ( usagePlace === 'product-page') {
            quantityDecrement();
        }
        if ( usagePlace === 'cart') {
            cartQuantityDecrement(productData.product.id)
        }
    }

    return (
        <div style={usagePlace === 'product-page' ? {marginRight: '20px'} : {}} className= {classes['product-quantity-container']} >
            <button onClick={decreasingQuantity} className= {classes['quantity-minus']}>-</button>
            <span className={classes['quantity-number']}>{quantity}</span>
            <button onClick={increasingQuantity} className= {classes['quantity-plus']}>+</button>
        </div>
    )
})
    


export default QuantityInput;