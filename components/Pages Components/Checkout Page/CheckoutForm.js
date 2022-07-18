import classes from './CheckoutForm.module.css';
import CheckoutProductsToBuy from './CheckoutProductsToBuy';
import TextInput from './TextInput';
import Button from '../../UI/Button';
import { useRef, useContext } from 'react';
import Context from '../../../store/context';

function CheckoutForm () {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const zipRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();

    const ctx = useContext(Context);

    function sumbitHandler (e) {
        e.preventDefault();
        const isFormValid = nameRef.current.isValueValid && emailRef.current.isValueValid && phoneRef.current.isValueValid && 
        addressRef.current.isValueValid && zipRef.current.isValueValid && cityRef.current.isValueValid && countryRef.current.isValueValid;
        if (!isFormValid) {
            nameRef.current.setTouched();
            emailRef.current.setTouched();
            phoneRef.current.setTouched();
            addressRef.current.setTouched();
            zipRef.current.setTouched();
            cityRef.current.setTouched();
            countryRef.current.setTouched();
            return;
        }
        console.log('clicked')
       ctx.checkoutStateHandler(true)
        
    }
    return(
        <form onSubmit={sumbitHandler} className={classes.form}>
            <div className={classes['form-control']}>
                <h1 style={{marginBottom:'50px'}}>CHECKOUT</h1>
                <div className={classes['from-section']}>
                    <h4 className={classes['from-section__title']}>BILLING DETAILS</h4>
                    <div className={classes['from-section__content']}>
                        <TextInput ref={nameRef} type = 'text' label ='Name' validateFunction = {value => value.trim() !== ''} errorMsg='Enter Name' inputPlaceHolder='john Doe' width= '48' />
                        <TextInput ref={emailRef} type = 'email' label ='Email' validateFunction = {value => value.includes('@') && value.includes('.com')} errorMsg='Enter an email' inputPlaceHolder='example@example.com' width= '48' />
                        <TextInput ref={phoneRef} type = 'tel' label ='Phone Number' validateFunction = {value => value.charCodeAt(value.length-1) >= 48 && value.charCodeAt(value.length-1) <=57} errorMsg='Enter a phone number' inputPlaceHolder='+11 1111 111' width= '48' />
                    </div>
                    
                </div>
                <div className={classes['from-section']}>
                    <h4 className={classes['from-section__title']}>SHIPPING INFO</h4>
                    <div className={classes['from-section__content']}>
                        <TextInput ref={addressRef} type = 'text' label ='Address' validateFunction = {value => value.trim() !== ''} errorMsg='Enter an address' inputPlaceHolder='1111 Williams Avenue' width= '100' />
                        <TextInput ref={zipRef} type = 'text' label ='Zip Code' validateFunction = {value => value.charCodeAt(value.length-1) >= 48 && value.charCodeAt(value.length-1) <=57} pattern = '[0-9]' errorMsg='Must be a number' inputPlaceHolder='10001' width= '48' />
                        <TextInput ref={cityRef} type = 'text' label ='City' validateFunction = {value => value.trim() !== ''} errorMsg='Enter a city' inputPlaceHolder='Cairo' width= '48' />
                        <TextInput ref={countryRef} type = 'text' label ='Country' validateFunction = {value => value.trim() !== ''} errorMsg='Enter a country' inputPlaceHolder='Egypt' width= '48' />
                    </div>
                    
                </div>
            </div>
            <div className={classes['form-products-checkout']}>
                <CheckoutProductsToBuy />
                <Button buttonUsage = 'show-order' buttonText = 'CONTINUE' backgroundColor ='rgb(216, 125, 74)' afterBackgroundColor = {'rgb(227, 145, 98)'} />
            </div>
        </form>
    )
}

export default CheckoutForm;