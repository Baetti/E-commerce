import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, emptyCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  // console.log(cartArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const totalAmount = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    totalAmount();
  }, [cartArray]);

  const checkOut = () => {
    alert(
      "Order has successfully placed!!! Thank You for Purchasing with us..."
    );
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {cartArray.length > 0 ? (
        <>
          <div className="row ms-5 me-5">
            <div className="col-md-8 ">
              <table className=" mt-5 table border rounded shadow p-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>
                        <img
                          width={"100px"}
                          height={"100px"}
                          src={product.thumbnail}
                          alt=""
                        />
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <button
                          onClick={() => dispatch(deleteFromCart(product.id))}
                          className="btn"
                        >
                          <i className="fa-solid fa-trash fa-2x text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
            <div className="col-lg-3 total border rounded p-5 mt-5 ">
              <h3 className="fw-bolder text-primary text-center">
                Cart Summary
              </h3>
              <h5 className="mt-3 ">
                Total Products: <span> {cartArray.length}</span>
              </h5>
              <h3>
                Total: <span className="text-danger">${total}</span>
              </h3>
              <div className="d-grid mt-5">
                <button
                  onClick={checkOut}
                  className="btn btn-warning fw-bolder fs-5 rounded w-100 mt-3"
                >
                  CHECK OUT
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-danger fs-3 text-center">Cart is Empty!!!</p>
      )}
    </div>
  );
}

export default Cart;
