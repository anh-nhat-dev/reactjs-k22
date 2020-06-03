import React from "react";
import { getImageUrl } from "../../shared/utils";

class Cart extends React.Component {
  render() {
    const { data, totalPrice, onChangeQuantity } = this.props;
    return (
      <>
        <div id="my-cart">
          <div className="row">
            <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
              Thông tin sản phẩm
            </div>
            <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">
              Tùy chọn
            </div>
            <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
          </div>
          <form method="post">
            {data.map((item) => {
              return (
                <div className="cart-item row" key={item.id}>
                  <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                    <img src={getImageUrl(item.image)} />
                    <h4>{item.name}</h4>
                  </div>
                  <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                    <input
                      type="number"
                      name={item.id}
                      id="quantity"
                      min={1}
                      className="form-control form-blue quantity"
                      value={item.quantity}
                      onChange={onChangeQuantity}
                    />
                  </div>
                  <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                    <b>{item.price}đ</b>
                    <a href="#">Xóa</a>
                  </div>
                </div>
              );
            })}

            <div className="row">
              <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <button
                  id="update-cart"
                  className="btn btn-success"
                  type="submit"
                  name="sbm"
                >
                  Cập nhật giỏ hàng
                </button>
              </div>
              <div className="cart-total col-lg-2 col-md-2 col-sm-12">
                <b>Tổng cộng:</b>
              </div>
              <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                <b>{totalPrice}đ</b>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Cart;
