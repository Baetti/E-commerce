import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cartSlice";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  // console.log(cartArray);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "100px" }}>
      {cartArray.length > 0 ? (
        <>
          <h3 className="fw-bolder text-primary m-5">Cart Summary</h3>
          <table className="container mt-5 table border rounded shadow p-5">
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
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
