import React, { useState } from "react";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";
import { flashcards } from "../../card-data";
import { Button } from "../button/Button";
import "./table.sass";

const CardTable = () => {
  const [english, setEnglish] = useState("");
  const [translation, setTranslation] = useState("");

  const handleEnglishChange = (event) => {
    setEnglish(event.target.value);
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleSaveClick = () => {
    localStorage.setItem("english", english);
    localStorage.setItem("translation", translation);
    setEnglish("");
    setTranslation("");
    alert("Saved!");
  };

  const handleCancelClick = () => {
    // 👇️ clear input value
    setEnglish("");
    setTranslation("");
  };
  return (
    <>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center table__english">English</th>
            <th className="text-center table__translation">Russian Translation</th>
            <th className="text-center table__actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table__input-row">
            <th>
              <input class="form-control form-control-sm" type="text" id="english" value={english} onChange={handleEnglishChange}></input>
            </th>
            <th>
              <input class="form-control form-control-sm" type="text" id="translation" value={translation} onChange={handleTranslationChange}></input>
            </th>
            <th className="text-center">
              <Button className="btn-outline-success btn-outline-none btn-sm" children={"SAVE"} onClick={handleSaveClick} /> /{" "}
              <Button className="btn-outline-danger btn-outline-none btn-sm" children={"CANCEL"} onClick={handleCancelClick} />
            </th>
          </tr>
        </tbody>
      </Table>

      <Table bordered hover size="sm">
        <tbody>
          {flashcards.map((flashcard) => {
            return <TableRow flashcard={flashcard} key={flashcard.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CardTable;
