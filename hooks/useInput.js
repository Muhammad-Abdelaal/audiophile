import {useState} from 'react'
function useInput (validateValue) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isInputTouched, setIsInputTouched] = useState(false);

    const isValueValid = validateValue(enteredValue);
    const hasError = isInputTouched && !isValueValid;

    function valueChangeHandler (e) {
        setEnteredValue(e.target.value);
    }

    function valueBlurHandler () {
        setIsInputTouched(true);
    }

    return {
        inputValue: enteredValue,
        isValueValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler
    }
}

export default useInput;