import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import "./flashcard.sass";

const Flashcard = (props) => {
    const [flip, setFlip] = useState(false);
    const { flashcard } = props;
    return (
        <Card className={`card text-center m-2 ${flip ? "card__flip" : ""}`} onClick={() => setFlip(!flip)}>
            <Card.Body className="card__info card__front">
                <Card.Title className="word">{flashcard.english}</Card.Title>
                <Card.Text className="transcription">{flashcard.transcription}</Card.Text>
            </Card.Body>
            <Card.Subtitle className="card__info card__back">{flashcard.russian}</Card.Subtitle>
        </Card>
    );
};

export default Flashcard;
