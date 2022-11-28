import React, { useState } from "react";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";
import { Button } from "../button/Button";
import "./table.sass";

const initialWord = { id: "", english: "", transcription: "", russian: "", tags: "", tags_json: "" };

const CardTable = ({ words, createOrUpdate }) => {
  const [newWord, setNewWord] = useState({ initialWord });

  const handleWordChange = (fieldName, value) => {
    const temp = { ...newWord };
    temp[fieldName] = value;
    setNewWord(temp);
  };

  const handleSaveClick = () => {
    const temp = { ...newWord };
    temp.id = words.length + 1;
    createOrUpdate(temp);
    setNewWord(initialWord);
  };

  const handleCancelClick = () => {
    setNewWord(initialWord);
  };
  return (
    <>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center table__english">English</th>
            <th className="text-center">Transcription</th>
            <th className="text-center table__translation">Russian Translation</th>
            <th className="text-center table__actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input className="form-control form-control-sm" type="text" value={newWord.english} onChange={(event) => handleWordChange("english", event.target.value)}></input>
            </th>
            <th>
              <input className="form-control form-control-sm" type="text" value={newWord.transcription} onChange={(event) => handleWordChange("transcription", event.target.value)}></input>
            </th>
            <th>
              <input className="form-control form-control-sm" type="text" value={newWord.russian} onChange={(event) => handleWordChange("russian", event.target.value)}></input>
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
          {words.map((flashcard) => {
            return <TableRow flashcard={flashcard} key={flashcard.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CardTable;
