import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import games from "./games.json";
import { FaPlaystation, FaXbox, FaDesktop, FaPlus, FaPlusCircle, FaStar } from "react-icons/fa";
import "./GameDetails.css"; // Import the custom CSS file

const GameDetails = () => {
  const { id } = useParams();
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return ;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [reviewInput, setReviewInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddToLibrary = () => {
    // Add your logic here to handle adding the game to the library
    setShowPopup(false); // Close the popup after adding to library (not implemented in this example)
  };

  const handleAddCollection = () => {
    // Add your logic here to handle creating a new collection
    setShowPopup(false); // Close the popup after creating a new collection (not implemented in this example)
  };

  const renderConsoleIcons = () => {
    const consoleIcons = [];

    if (game.console.includes("ps")) {
      consoleIcons.push(<FaPlaystation key="ps" className="console-icon mr-2" size={16} color="#777" />);
    }
    if (game.console.includes("xbox")) {
      consoleIcons.push(<FaXbox key="xbox" className="console-icon mr-2" size={16} color="#777" />);
    }
    if (game.console.includes("pc")) {
      consoleIcons.push(<FaDesktop key="pc" className="console-icon mr-2" size={16} color="#777" />);
    }

    return consoleIcons;
  };

  const renderRatingStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} size={16} color="#ffc107" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStar key="half" size={16} color="#ffc107" />);
    }
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} size={16} color="#777" />);
    }
  
    return stars;
  };

  const handleReviewSubmit = () => {
    if (reviewInput.trim() === "") {
      setErrorMessage("Please enter a review before submitting.");
      setReviewSubmitted(false); // Reset reviewSubmitted to false if there was an error
    } else {
      // Add your logic here to handle submitting the review
      setErrorMessage(""); // Clear the error message if review is valid
      setReviewSubmitted(true); // Set reviewSubmitted to true if the review is successfully submitted
      setReviewInput(""); // Clear the review input box

      // Hide the success message after 3 seconds (3000ms)
      setTimeout(() => {
        setReviewSubmitted(false);
      }, 5000);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Link to="/all-games" className="btn-back-to-games"> &lt; Back to All Games</Link>
      </Row>
      <Row className="mt-5">
        <Col md={3}>
          <img src={game.imageUrl} alt={game.name} className="w-100" />
          <Row>
            <Col md={6}>
              <p className="text-uppercase text-muted">Available on</p>
            </Col>
            <Col md={6}>
              <div className="text-end console-icons">{renderConsoleIcons()}</div>
            </Col>
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <div className="title-and-release">
                <h1 className="text-uppercase">{game.name}</h1>
                <p className="text-muted release">{game.release}</p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-end">
              <FaPlusCircle key="add" size={24} onClick={() => setShowPopup(true)} />
            </Col>
          </Row>

          <p className="text-muted">{game.type}</p>

          <Card bg="light" className="summary-card">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Summary
              <div>{renderRatingStars(parseFloat(game.rating))}</div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{game.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Review Section */}
      <Row className="mt-4">
        <Col>
          <h4>Leave a Review</h4>
          <Form>
            <Form.Group controlId="reviewInput" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your review here..."
                value={reviewInput}
                onChange={(e) => setReviewInput(e.target.value)}
              />
            </Form.Group>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            {reviewSubmitted && (
              <p className="text-success">Your review has been successfully submitted.</p>
            )}
            <div className="d-flex justify-content-end">
              <Button variant="dark" onClick={handleReviewSubmit}>
                Submit Review
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Add to Library Popup */}
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Library</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* "Select a collection" Text */}
          <div className="mb-3">Select a collection</div>
          {/* Add to Library Section */}
          <div className="d-flex flex-column align-items-center">
            <Button
              variant="outline-dark"
              size="lg"
              onClick={handleAddCollection}
              className="mb-3"
            >
              <FaPlus key="add-collection" size={40} />
            </Button>
            {/* You can add additional content here if needed */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddToLibrary}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GameDetails;
