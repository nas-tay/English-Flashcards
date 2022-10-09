import React from "react";
import Flashcard from "../flashcard/Flashcard";
import { Container, Row } from "react-bootstrap";

const flashcards = [
    { id: "12101", english: "orange", transcription: "[ˈɒrɪndʒ]", russian: "оранжевый", tags: "цвета", tags_json: '["u0446u0432u0435u0442u0430"]' },
    { id: "12118", english: "finger", transcription: "[ˈfɪŋɡə]", russian: "палец", tags: "анатомия", tags_json: '["u0430u043du0430u0442u043eu043cu0438u044f"]' },
    { id: "12127", english: "readability", transcription: "[riːdəˈbɪlɪtɪ] ", russian: "читабельность", tags: "IT", tags_json: '["IT"]' },
    { id: "12130", english: "argument", transcription: "[ˈɑːgjʊmənt]", russian: "аргумент", tags: "IT", tags_json: '["IT"]' },
    { id: "12131", english: "restructuring", transcription: "[riːˈstrʌkʧərɪŋ]", russian: "трансформация", tags: "IT", tags_json: '["IT"]' },
    { id: "12134", english: "stack", transcription: "[stæk]", russian: "стек", tags: "IT", tags_json: '["IT"]' },
    { id: "12136", english: "hardware", transcription: "[ˈhɑːdwɛə]", russian: "оборудование", tags: "IT", tags_json: '["IT"]' },
    { id: "12156", english: "bullfinch\t", transcription: "[ `bʊlfɪntʃ ]", russian: "снегирь\t", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12157", english: "owl\t", transcription: "[ aʊl ]", russian: "сова", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12158", english: "jay\t", transcription: "[ dʒeɪ ]", russian: "сойка", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12159", english: "nightingale\t", transcription: "[ `naɪtɪŋɡeɪl ]", russian: "соловей", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12160", english: "ostrich", transcription: "[ `ɒstrɪtʃ ]", russian: "страус", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12161", english: "swift\t", transcription: "[ swɪft ]", russian: "стриж", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12162", english: "little owl\t", transcription: "[ `lɪtl̩ aʊl ]", russian: "сыч", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12163", english: "wagtail", transcription: "[ `wæɡteɪl ]", russian: "трясогузка", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12164", english: "hoopoe\t", transcription: "[ `huː puː ]", russian: "удод", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12165", english: "duck\t", transcription: "[ dʌk ]", russian: "утка", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12166", english: "pheasant\t", transcription: "[ `feznt ]", russian: "фазан", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12167", english: "eagle-owl", transcription: "[ `iːɡl`aʊl ]", russian: "филин", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12168", english: "flamingo", transcription: "[ flə`mɪŋɡəʊ ]", russian: "фламинго\t", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12169", english: "heron\t", transcription: "[ `herən ]", russian: "цапля", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12170", english: "guinea fowl\t", transcription: "[ `ɡɪni faʊl ]", russian: "цесарка", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12171", english: "gull", transcription: "[ ɡʌl ]", russian: "чайка", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12172", english: "siskin\t", transcription: "[ `sɪˌskɪn ]", russian: "чиж", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
    { id: "12173", english: "goldfinch\t", transcription: "[ `ɡəʊldfɪntʃ ]", russian: "щегол", tags: "птицы", tags_json: '["u043fu0442u0438u0446u044b"]' },
];

const FlashcardList = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                {flashcards.map((flashcard) => {
                    return <Flashcard flashcard={flashcard} key={flashcard.id} />;
                })}
            </Row>
        </Container>
    );
};

export default FlashcardList;
