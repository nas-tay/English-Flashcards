import React from "react";
import Flashcard from "../flashcard/Flashcard";
import { Container, Row } from "react-bootstrap";

const FlashcardList = ({ words, createOrUpdate }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {words.map((flashcard) => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />;
        })}
      </Row>
    </Container>
  );
};

export default FlashcardList;
