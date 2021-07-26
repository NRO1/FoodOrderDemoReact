import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';
const isFive = (value) => value.trim().length === 5;

const Checkout = (props) => {
const [validForm, setValidForm] = useState({
  name: true,
  street: true,
  postal: true,
  city: true
})

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enName = nameRef.current.value;
    const enStreet = streetRef.current.value;
    const enPostal = postalRef.current.value;
    const enCity = cityRef.current.value;

    const NameValid = !isEmpty(enName);
    const streetValid = !isEmpty(enStreet);
    const postalValid = isFive(enPostal);
    const cityValid = !isEmpty(enCity);

    setValidForm({
      name: NameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid
    });

    
    const formIsValid = (NameValid && streetValid && postalValid && cityValid);
    if (!formIsValid) {
      return;
    } else {
      props.onConfirm({
        name: enName,
        street: enStreet,
        postalCode: enPostal,
        city: enCity
      })
    }
  };

  const nameClassSelector = `${classes.control} ${validForm.name ? '' : classes.invalid}`;
  const streetClassSelector = `${classes.control} ${validForm.street ? '' : classes.invalid}`;
  const postalClassSelector = `${classes.control} ${validForm.postal ? '' : classes.invalid}`;
  const cityClassSelector = `${classes.control} ${validForm.city ? '' : classes.invalid}`;


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassSelector}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!validForm.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetClassSelector}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!validForm.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalClassSelector}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!validForm.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={cityClassSelector}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!validForm.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
