import React from "react";

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
