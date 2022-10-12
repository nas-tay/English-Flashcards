import React from "react";
import Flashcard from "../flashcard/Flashcard";
import { Container, Row } from "react-bootstrap";
import { flashcards } from "../../card-data";

const FlashcardList = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                {flashcards.map((flashcard) => {
                    return <Flashcard flashcard={flashcard} key={flashcard.id} />;
                })}
            </Row>
        </Container>
    );
};

export default FlashcardList;
