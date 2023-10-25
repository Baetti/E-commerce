import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);

  const dispatch = useDispatch();

  // console.log(wishlistArray);
  const addToCartFromWishlist = (product) => {
    dispatch(addToCart(product));
    dispatch(deleteFromWishlist(product.id));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Row className="mb-5 ms-5">
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product, index) => (
            <Col
              style={{ marginTop: "100px" }}
              key={index}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="mb-3"
            >
              <Card
                className="shadow"
                style={{ width: "18rem", height: "29rem" }}
              >
                <Card.Img
                  height={"200px"}
                  variant="top"
                  src={product?.thumbnail}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{product?.title} </Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 50)}... </p>
                    <p className=" fw-bold">${product?.price}</p>
                  </Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Button
                      onClick={() => dispatch(deleteFromWishlist(product.id))}
                      className="btn btn-light"
                    >
                      <i class="fa-solid fa-trash  fa-2x  me-1 text-danger"></i>
                    </Button>
                    <Button
                      onClick={() => addToCartFromWishlist(product)}
                      className="btn btn-light"
                    >
                      <i class="fa-solid fa-cart-plus fa-2x me-1 text-success"></i>
                    </Button>
                  </div>{" "}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-danger fs-3 text-center">Wishlist is Empty!!!</p>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
