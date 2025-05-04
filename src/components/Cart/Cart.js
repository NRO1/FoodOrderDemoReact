import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  /*const [submitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);*/
  const [checkout, setCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const orderForm = () => {
    setCheckout(true);
  };

  const submitHandler = async (userData) => {
    console.log(userData)
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartRemove.bind(null, item.id)}
          onAdd={cartAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        CLOSE
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderForm}>
          ORDER
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && (
        <Checkout onCancel={props.onClose} onConfirm={submitHandler} />
      )}
      {!checkout && modalActions}
    </React.Fragment>
  );

  const submittingContent = <p>Sending Order....</p>;

  const didSubmitContent = (
    <React.Fragment>
      <p>Order sent successfully!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          CLOSE
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submitting && !didSubmit && cartModalContent}
      {submitting && submittingContent}
      {!submitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
