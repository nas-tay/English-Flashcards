import React from "react";
import { Button } from "../button/Button";
import * as Icon from "react-bootstrap-icons";
import "../button/button.sass";
import "./table.sass";

const TableRow = (props) => {
  const { flashcard } = props;
  return (
    <tr>
      <th className="text-center">{flashcard.english}</th>
      <th className="text-center">{flashcard.russian}</th>
      <th className="text-center table__actions">
        <Button className="btn-outline-warning btn-outline-none btn-sm" children={"EDIT"} /> / <Button className="btn-outline-none btn-sm" children={<Icon.TrashFill />} />
      </th>
    </tr>
  );
};

export default TableRow;
