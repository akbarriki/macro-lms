"use client";

import { useId, useRef, useState } from "react";
import type { QuizQuestion } from "@/data/quizzes";

const buttonStyle =
  "inline-flex min-h-11 items-center bg-forest px-5 text-sm font-semibold text-white transition-colors hover:bg-forest-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-40";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  // Each quiz gets its own id, so its answers never mix with another topic's quiz.
  const id = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  // The answers the student has checked so far, in order.
  const [answers, setAnswers] = useState<number[]>([]);

  const total = questions.length;
  const isFinished = questionIndex === total;
  const isChecked = answers.length > questionIndex;
  const score = answers.filter((answer, index) => answer === questions[index].answer).length;

  function checkAnswer() {
    if (selected !== null) {
      setAnswers([...answers, selected]);
    }
  }

  function goToNext() {
    setQuestionIndex(questionIndex + 1);
    setSelected(null);
    headingRef.current?.focus();
  }

  function restart() {
    setQuestionIndex(0);
    setSelected(null);
    setAnswers([]);
    headingRef.current?.focus();
  }

  return (
    <section className="mt-12 border border-line bg-white p-5 sm:p-7" aria-labelledby={`${id}-heading`}>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id={`${id}-heading`}
          ref={headingRef}
          tabIndex={-1}
          className="scroll-mt-6 font-serif text-2xl text-ink outline-none"
        >
          {isFinished ? "Your results" : "Test yourself"}
        </h2>
        <p className="text-sm text-muted" aria-live="polite">
          {isFinished ? "Quiz complete" : `Question ${questionIndex + 1} of ${total}`}
        </p>
      </div>

      <progress className="sr-only" value={answers.length} max={total} aria-label="Quiz progress" />
      <div className="mt-4 h-1.5 bg-line" aria-hidden="true">
        <div
          className="h-full bg-forest transition-[width] motion-reduce:transition-none"
          style={{ width: `${(answers.length / total) * 100}%` }}
        />
      </div>

      {isFinished ? (
        <Results questions={questions} answers={answers} score={score} onRestart={restart} />
      ) : (
        <Question
          // A new key gives every question a fresh set of options.
          key={questionIndex}
          groupName={`${id}-${questionIndex}`}
          question={questions[questionIndex]}
          selected={selected}
          isChecked={isChecked}
          isLast={questionIndex === total - 1}
          onSelect={setSelected}
          onCheck={checkAnswer}
          onNext={goToNext}
        />
      )}
    </section>
  );
}

type QuestionProps = {
  groupName: string;
  question: QuizQuestion;
  selected: number | null;
  isChecked: boolean;
  isLast: boolean;
  onSelect: (option: number) => void;
  onCheck: () => void;
  onNext: () => void;
};

function Question({ groupName, question, selected, isChecked, isLast, onSelect, onCheck, onNext }: QuestionProps) {
  const isCorrect = selected === question.answer;

  return (
    <form
      className="mt-6"
      onSubmit={(event) => {
        event.preventDefault();
        if (isChecked) {
          onNext();
        } else {
          onCheck();
        }
      }}
    >
      <fieldset>
        <legend className="text-base font-semibold leading-7 text-ink">{question.question}</legend>
        <div className="mt-4 space-y-3">
          {question.options.map((option, index) => (
            <label
              key={option}
              className={`flex min-h-11 items-center gap-3 border px-4 py-3 text-sm leading-6 text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-forest ${optionStyle(index, question, selected, isChecked)}`}
            >
              <input
                type="radio"
                name={groupName}
                className="shrink-0 accent-forest"
                checked={selected === index}
                disabled={isChecked}
                onChange={() => onSelect(index)}
              />
              <span className="flex-1">{option}</span>
              {isChecked && index === question.answer && <span className="font-semibold text-forest">✓ Correct answer</span>}
              {isChecked && index === selected && !isCorrect && <span className="font-semibold text-rust">✗ Your answer</span>}
            </label>
          ))}
        </div>
      </fieldset>

      <div aria-live="polite">
        {isChecked && (
          <div className={`mt-5 border-l-2 px-4 py-2 ${isCorrect ? "border-forest" : "border-rust"}`}>
            <p className={`text-sm font-semibold ${isCorrect ? "text-forest" : "text-rust"}`}>
              {isCorrect ? "Correct!" : "Not quite."}
            </p>
            <p className="mt-1 text-sm leading-6 text-ink">{question.explanation}</p>
          </div>
        )}
      </div>

      <button type="submit" className={`mt-6 ${buttonStyle}`} disabled={selected === null}>
        {!isChecked ? "Check answer" : isLast ? "See results" : "Next question"}
      </button>
    </form>
  );
}

// Choose the colors for one option.
function optionStyle(index: number, question: QuizQuestion, selected: number | null, isChecked: boolean) {
  if (isChecked && index === question.answer) return "border-forest bg-[#e6f0eb]";
  if (isChecked && index === selected) return "border-rust bg-[#f9ece8]";
  if (isChecked) return "border-line opacity-60";
  if (index === selected) return "cursor-pointer border-forest bg-[#e6f0eb]";
  return "cursor-pointer border-line hover:border-forest";
}

type ResultsProps = {
  questions: QuizQuestion[];
  answers: number[];
  score: number;
  onRestart: () => void;
};

function Results({ questions, answers, score, onRestart }: ResultsProps) {
  const isPerfect = score === questions.length;

  return (
    <div className="mt-6">
      <p className="font-serif text-4xl text-ink">
        {score} / {questions.length}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">
        {isPerfect ? "Excellent! Every answer is correct." : "Review the questions you missed, then try again."}
      </p>

      <ol className="mt-6 divide-y divide-line border-y border-line">
        {questions.map((question, index) => {
          const isCorrect = answers[index] === question.answer;

          return (
            <li key={question.question} className="py-4 text-sm leading-6">
              <p className="font-medium text-ink">
                <span className={isCorrect ? "text-forest" : "text-rust"}>{isCorrect ? "✓ Correct: " : "✗ Incorrect: "}</span>
                {question.question}
              </p>
              {!isCorrect && (
                <p className="mt-1 text-muted">
                  Correct answer: <span className="text-ink">{question.options[question.answer]}</span>
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <button type="button" className={`mt-6 ${buttonStyle}`} onClick={onRestart}>
        Try again
      </button>
    </div>
  );
}
