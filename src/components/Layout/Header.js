import React from "react";
import foodPic from "../../assets/vegetable-skewer.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header} id="main-header">
        <h1>Super meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        
      </header>
      <div className={classes["main-image"]}>
        <img alt="delicious food" id="top-image" src={foodPic} />
      </div>
    </React.Fragment>
  );
};

export default Header;
