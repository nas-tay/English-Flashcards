import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./flashcard.sass";
import { Button } from "../button/Button";

const Flashcard = (props) => {
  const { flashcard } = props;

  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };
  return (
    <Card className={"card text-center m-2"}>
      <Card.Body className="card__info card__front">
        <Card.Title className="word">{flashcard.english}</Card.Title>
        <Card.Text className="transcription">{flashcard.transcription}</Card.Text>
      </Card.Body>
      {pressed ? (
        <Card.Subtitle className="text-success card__translation" onClick={handleChange}>
          {flashcard.russian}
        </Card.Subtitle>
      ) : (
        <Button className="btn-outline-success card__btn" children={"Показать перевод"} onClick={handleChange} />
      )}
    </Card>
  );
};

export default Flashcard;
