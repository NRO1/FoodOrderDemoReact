import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const typedAmount = amountInputRef.current.value;
    const typedAmountNum = +typedAmount;

    if (
      typedAmount.trim().length === 0 ||
      typedAmountNum < 1 ||
      typedAmountNum > 9
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(typedAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-9)</p>}
    </form>
  );
};

export default MealItemForm;
