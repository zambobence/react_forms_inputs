import React from 'react'

import useInput from '../hooks/use-input';


const BasicForm = (props) => {
  const {
    inputValue: nameValue, 
    inputChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameInputBlurHandler, 
    hasError: nameHasError, 
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "")
  const {
    inputValue: lastNameValue, 
    inputChangeHandler: lastNameChangeHandler, 
    inputBlurHandler: lastNameInputBlurHandler, 
    hasError: lastNameHasError, 
    reset: lastNameReset
  } = useInput((value) => value.trim() !== "")
  const {
    inputValue: emailValue, 
    inputChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailInputBlurHandler, 
    hasError: emailHasError, 
    reset: emailReset
  } = useInput((value) => value.includes('@'))

  let formValid = false
  if (!emailHasError && !nameHasError && !lastNameHasError){
    formValid = true
  }

  const submitFormHandler = (event) => {
    event.preventDefault()
    if(!formValid){
      return 
    }

    firstNameReset()
    lastNameReset()
    emailReset()
  }

  const nameClass = nameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameValue} onBlur={nameInputBlurHandler} onChange={nameChangeHandler} />
        {nameHasError && <p>Please provide a correct input</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={lastNameValue} onBlur={lastNameInputBlurHandler} onChange={lastNameChangeHandler} />
        {lastNameHasError && <p>Please provide a correct input</p>}

        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' value={emailValue} onBlur={emailInputBlurHandler} onChange={emailChangeHandler} />
        {emailHasError && <p>Please provide a correct email</p>}

      </div>
      <div className='form-actions'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
