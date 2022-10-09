import React from "react";
import Table from "react-bootstrap/Table";

const TableCell = (props) => {
    const { flashcard } = props;
    return (
        <tr>
            <th>{flashcard.english}</th>
            <th>{flashcard.russian}</th>
        </tr>
    );
};

export default TableCell;
