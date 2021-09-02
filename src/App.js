import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import Header from "./components/header/header.component";
import CheckOutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selector";
// import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.action";

// const App = ({checkUserSession, currentUser}) => {
const App = () => {
  
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default (App);
