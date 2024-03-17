import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                let cssClass = "";
                if (answer === selectedAnswer) {
                    cssClass = "selected";
                }
                if (answerState === "correct" && answer === selectedAnswer) {
                    cssClass = "correct";
                }
                if (answerState === "wrong" && answer === selectedAnswer) {
                    cssClass = "wrong";
                }
                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} 
                        className={cssClass} disabled={answerState !== ""}>{answer}</button>
                    </li>
                );
            })}
        </ul>
    );
}
