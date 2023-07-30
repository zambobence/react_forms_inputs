import { useState } from "react";

const SimpleInput = (props) => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailInputTouched, setEmailTouched] = useState(false)
  const [inputTouched, setInputTouched] = useState(false)

  const enteredNameIsValid = name.trim() !== ""
  const nameInputIsInvalid = !enteredNameIsValid && inputTouched

  const enteredEmailIsValid = email.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && emailInputTouched

  let formIsValid = false

  if (!nameInputIsInvalid && !emailInputIsInvalid){
    formIsValid = true
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setInputTouched(true)

    if (!formIsValid){
      return
    }
    console.log(email)
    console.log(name)
    setName('')
    setEmail('')
    setInputTouched(false)
    setEmailTouched(false)
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setInputTouched(true)
  }


  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const emailBlurHandler = (evet) => {
    setEmailTouched(true)
  }
   return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={nameChangeHandler} onBlur={inputBlurHandler}/>
        {!nameInputIsInvalid && <p>Please provide a correct nanme</p>}
      </div>
      <div className='form-control'>
        <label htmlFor='name'>Your email</label>
        <input type='email' id='email' value={email} onChange={emailInputChangeHandler} onBlur={emailBlurHandler}/>
        {!emailInputIsInvalid && <p>Please provide a correct email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
