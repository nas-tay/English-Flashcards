import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FlashcardList from "./components/flashcardList/FlashcardList";
import CardTable from "./components/cardTable/CardTable";

function App() {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <FlashcardList />
                    <CardTable />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
