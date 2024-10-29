"use client";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { URL } from "../Utils";

const ProductCard = ({
  title,
  price,
  description,
  fabrics,
  colors,
  whatsppLink,
  product,
}) => {
  const styles = {
    container: {
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      height: "100%",
    },
    productTitle: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    productPrice: {
      color: "#eb5d1e",
      fontSize: "28px",
      fontWeight: "bold",
    },
    subText: {
      fontSize: "16px",
    },
    description: {
      margin: "10px 0",
    },
    button: {
      marginRight: "10px",
      background: "#eb5d1e",
      border: 0,
    },
  };

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    postCode: "",
    phoneNumber: "",
  });

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSuccessModal(false);
    setFormData({
      name: "",
      email: "",
      address: "",
      postCode: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const colorName = selectedColor.split(":::")[1];
    const orderData = {
      productTitle: title,
      color: colorName,
      productPrice: price,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      postCode: formData.postCode,
      phoneNumber: formData.phoneNumber,
    };

    const payload = { data: orderData };

    try {
      const response = await fetch(`${URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowModal(false); // Close form modal
        setShowSuccessModal(true); // Show success modal
        setFormData({
          name: "",
          email: "",
          address: "",
          postCode: "",
          phoneNumber: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Failed to place order:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <ProductSwiper product={product} selectedColor={selectedColor} />
        </div>
        <div className="col-lg-6">
          <div style={styles.container}>
            <h4 style={styles.productTitle}>{title}</h4>
            <p style={styles.productPrice}>{price}</p>
            <p>
              <strong>Description</strong>
            </p>
            <p style={styles.description}>{description}</p>

            <div className="d-flex align-items-center mb-3">
              <strong style={{ marginRight: "5%" }}>Color:</strong>
              <div
                className="post-content d-flex"
                style={{
                  paddingTop: 0,
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                {colors?.map((each) => (
                  <div
                    title={each.split(":::")[1]}
                    key={each}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: each.split(":::")[0],
                      cursor: "pointer",
                      border: each === selectedColor ? "5px solid #eb5d1f" : "",
                    }}
                    onClick={() => handleColorClick(each)}
                  />
                ))}
              </div>
            </div>

            <div className="d-flex">
              <Button
                onClick={handleAddToCartClick}
                className="btn btn-primary btn-hover"
                style={styles.button}
              >
                Add To Cart
              </Button>
              <a
                href={whatsppLink}
                target="_blank"
                className="btn btn-primary btn-hover"
                style={styles.button}
              >
                Order Via Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Form */}
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Product Title
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue={title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Product Price
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly defaultValue={price} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Color
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={selectedColor.split(":::")[1]}
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
              />
            </Form.Group>

            <Form.Group controlId="formPostCode">
              <Form.Label>Post Code</Form.Label>
              <Form.Control
                type="text"
                name="postCode"
                required
                value={formData.postCode}
                onChange={handleInputChange}
                placeholder="Enter your Post Code"
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your Phone Number"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={handleCloseModal}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you for your order. Our delivery team will contact you shortly
            to arrange the details. If you have any questions, feel free to
            reach out at info@sofasaleuk.co.uk.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;
