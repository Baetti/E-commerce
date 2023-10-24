import { Col, Row, Card, Button } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const data = useFetch("https://dummyjson.com/products");
  const dispatch = useDispatch();
  // console.log(data);
  return (
    <>
      <Row className="mb-5 ms-5">
        {data?.length > 0 ? (
          data?.map((product, index) => (
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
                      onClick={() => dispatch(addToWishlist(product))}
                      className="btn btn-light"
                    >
                      <i class="fa-solid fa-heart  fa-2x  me-1 text-danger"></i>
                    </Button>
                    <Button
                      onClick={() => dispatch(addToCart(product))}
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
          <p>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
