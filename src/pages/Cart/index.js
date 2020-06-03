import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { actionType } from "../../shared/constants";

class CartContainer extends React.Component {
  _onChangeQuantity = (e) => {
    const { name, value } = e.target;
    this.props.updateQuantity({
      id: name,
      quantity: value,
    });
  };

  _exTract = () => {
    const { data } = this.props;
    return {
      data: data,
      totalPrice: data.reduce((a, c) => a + c.quantity * c.price, 0),
      onChangeQuantity: this._onChangeQuantity,
    };
  };

  render() {
    return <Cart {...this._exTract()} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (item) =>
      dispatch({
        type: actionType.UPDATE_QUANTITY_CART,
        payload: item,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
