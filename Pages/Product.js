import { Fragment, useCallback, useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';
import data from '../data.json';
import Button from '../components/UI/Button';
import classes from '../components/Pages Components/Product Page/Product.module.css';
import QuantityInput from '../components/Layout/Quantity Input/QuantityInput';

function Product ({getProductToAddToCart}) {
    window.scrollTo(0, 0)
    // CEHCKING SCREEN WIDTH

        var current = window.innerWidth;
        const initialWidthState = current < 768 ? 'mobile' : current <= 992 && current >= 768 ? 'tablet' : current > 992 ? 'desktop' :'';
        const [widthState, setWidthState] = useState(initialWidthState);
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768 && current > 768) {
                current = window.innerWidth;
                setWidthState('mobile');
            }
            else if (window.innerWidth >= 768 && window.innerWidth <= 992 && (current < 768 || current > 992)) {
                current = window.innerWidth;
                setWidthState('tablet');
            }
            else if (window.innerWidth > 992 && current <= 992) {
                current = window.innerWidth;
                setWidthState('desktop');
            }
            
        })

    //

    const [product, setProduct] = useState(''); 
    const productName = useParams().productname;
    const [quantity, setQuantity] = useState(1);


    useEffect ( () => {
        if( productName === 'yx1-earphones') setProduct(data[0]);
        if( productName === 'xx59-headphones') setProduct(data[1]);
        if( productName === 'xx99-mark-one-headphones') setProduct(data[2]);
        if( productName === 'xx99-mark-two-headphones') setProduct(data[3]);
        if( productName === 'zx7-speaker') setProduct(data[4]);
        if( productName === 'zx9-speaker') setProduct(data[5]);

    }, [productName, setProduct] );

    // addong " , " 
    const productPrice = (product !== '' && product.price.toString().length === 4) ? product.price.toString().charAt(0).concat(',',product.price.toString().slice(1)) 
    : (product !== '' && product.price.toString().length < 4) ? product.price : '';

    // handeling quantity actions

    const quantityIncrement = useCallback(() => {
        setQuantity( prev => {
            return prev + 1 ;
        })
    }, [])
    const quantityDecrement = useCallback(() => {
        if (quantity > 1) {
            setQuantity( prev => {
                return prev - 1 ;
            })
        }
    }, [quantity])
    
    


    

    const inboxContent = product !== '' ? product.includes.map( (item, index) => {
        return (
            <li key={index} className={classes['inbox-item']}>
                <span className={classes['inbox-item__quantity']}>{item.quantity}x</span>
                <p className={classes['inbox-item__text']}>{item.item}</p>
            </li>
        )
    } ) : '';

    return(
        <Fragment >

            {product !== '' ?
            
                <div className={classes['product-img-details']}>
                    <img alt='product-img' src={widthState === 'mobile' ? `${product.image.mobile.slice(1)}` : widthState === 'tablet' ? `${product.image.tablet.slice(1)}` 
                    :widthState === 'desktop' ? `${product.image.desktop.slice(1)}` :''} className={classes['product-img']} />
                    <div className={classes['product-details']}>
                        {product.new ? <div className={classes['product-details__new-product']} > NEW PRODUCT </div> : '' }
                        <h1 className={classes['product-details__name']} > {product.name}</h1>
                        <p className={classes['product-details__description']} > {product.description}</p>
                        <h3>$ {productPrice}</h3>
                        <div className= {classes['product-quantity-addtocart']}>
                            <QuantityInput usagePlace = 'product-page' quantityIncrement = {quantityIncrement} quantityDecrement = {quantityDecrement} productQuantity = {quantity} />
                            <Button getProductToAddToCart = {getProductToAddToCart} quantity = {quantity} product = {product} buttonText = 'ADD TO CART' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = {'rgb(227, 145, 98)'} />
                        </div>
                    </div>
                </div>
            
            :''}
            {product !== '' ?
            
                <div className={classes['product-features-inbox']}>
                    <div className={classes['product-features']}>
                        <h1 className={classes['product-features__title']}>FEATURES</h1> 
                        <p className={classes['product-features__text']}>
                            {product.features}
                        </p>
                    </div>
                    <div className={classes['product-inbox']}>
                        <h1 className={classes['product-inbox__title']} >IN THE BOX</h1>
                        {inboxContent}
                    </div>
                </div>
            
            : ''}
        </Fragment>
    )
}

export default Product;