import classes from './TextInput.module.css';
import useInput from '../../../hooks/useInput';
import React, { useImperativeHandle } from 'react';



const TextInput = React.forwardRef(({type, label, width, validateFunction, errorMsg, inputPlaceHolder, pattern}, ref) => {

    const {isValueValid, hasError, valueChangeHandler, valueBlurHandler} = useInput(validateFunction)

    useImperativeHandle (ref , () => ({
        setTouched:valueBlurHandler,
        isValueValid
    }))
    return (
        <div style={{width : `${width}%`}} className={classes['input-container']}>
            <div>
                <label style={hasError ? {color:'rgb(229, 80, 34)'} : {}} className={classes.label}>{label}</label>
                {hasError && <span className={classes['input-error-msg']}>{errorMsg}</span>}
            </div>
            <input ref={ref} style={hasError ? {border:'rgb(229, 80, 34) 2px solid'} : {}} onChange={valueChangeHandler}  onBlur = {valueBlurHandler} className={classes.input} type={type}  placeholder = {inputPlaceHolder} />
        </div>
    )
}) 


export default TextInput;