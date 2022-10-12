import React from "react";
import TableCell from "../tableCell/TableCell";
import { Table } from "react-bootstrap";
import { flashcards } from "../../card-data";

const CardTable = () => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th className="text-center">Term</th>
                    <th className="text-center">Definition</th>
                </tr>
            </thead>
            <tbody>
                {flashcards.map((flashcard) => {
                    return <TableCell flashcard={flashcard} key={flashcard.id} />;
                })}
            </tbody>
        </Table>
    );
};

export default CardTable;
