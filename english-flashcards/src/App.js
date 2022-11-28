import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FlashcardList from "./components/flashcardList/FlashcardList";
import CardTable from "./components/cardTable/CardTable";
import { flashcards } from "./card-data";

function App() {
  const [words, setWords] = useState(flashcards);
  const createOrUpdate = (newWord) => {
    const wordIndex = words.findIndex((word) => word.id === newWord.id);
    if (wordIndex !== -1) {
      setWords([...words.slice(0, wordIndex), newWord, [...words.slice(wordIndex + 1)]]);
    } else {
      setWords([...words, newWord]);
    }
  };

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <FlashcardList words={words} createOrUpdate={createOrUpdate} />
          <CardTable words={words} createOrUpdate={createOrUpdate} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
