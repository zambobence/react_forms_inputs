import { useReducer, useState } from "react";


const initialState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    switch (action.type){
        case "change_input":
            return { value: action.value, isTouched: state.isTouched};
        case "blur_input":
            return { value: state.value, isTouched: true};
        case "reset":
            return {value: '', isTouched: false}
        default:
            return state
    }
}



const useInput = (validator) => {

    const [inputState, dispatch] = useReducer(inputReducer, initialState)


    const inputIsValid = validator(inputState.value)
    const hasError = inputState.isTouched && !inputIsValid

    const inputChangeHandler = (event) => {
        dispatch({type: 'change_input', value: event.target.value})
    }

    const inputBlurHandler = (event) => {
        dispatch({type: 'blur_input'})
    }

    const reset = (event) => {
        dispatch({type: 'reset'})
    }

    return { inputValue: inputState.value, inputChangeHandler, inputBlurHandler, hasError, reset}
}
export default useInput