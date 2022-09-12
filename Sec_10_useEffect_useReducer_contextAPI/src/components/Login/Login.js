import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_EMAIL":
      return { value: action.val, isValid: action.val.includes('@') };
      case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes('@') };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_PASSWORD":
      return { value: action.val, isValid: action.val.trim().length > 6 };
      case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

// Practice useReducer hook
const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: "", 
    isValid: null
  });

  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: "", 
    isValid: null
  });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("validate useEffect executing!");
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({type: "INPUT_EMAIL", val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({type: "INPUT_PASSWORD", val: event.target.value});
  };

  const validateEmailHandler = () => {
    emailDispatch({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    passwordDispatch({type: "INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label='E-Mail'
          id='email'
          type='email'
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

// Practice useEffect hook
// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   useEffect(() => {
//     const validatingTimer = setTimeout(() => {
//       console.log("let's validate it!");
//       setFormIsValid(
//         enteredPassword.trim().length > 6 && enteredEmail.includes('@')
//       );
//     }, 2000);

//     return () => {
//       console.log("clean-up!");
//       clearTimeout(validatingTimer); // Use JavaScript closure.
//     };
//   }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

export default Login;
