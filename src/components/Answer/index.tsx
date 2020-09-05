import React, { useState } from 'react';
import { AnswerStyle, AnswerWrongOrCorrectStyle } from './style';

interface IAnswer {
  index: number;
  answer: string;
  isCorrect: boolean;
  why: string;
}

const Answer: React.FC<IAnswer> = ({
  answer,
  index,
  isCorrect,
  why,
}: IAnswer) => {
  const NO_ANSWER = 0;
  const ANSWER_WRONG = -1;
  const ANSWER_RIGHT = 1;

  const [answerValidate, setAnswerValidate] = useState(0);

  function validateIsCorrect(pValidate: boolean): void {
    pValidate
      ? setAnswerValidate(ANSWER_RIGHT)
      : setAnswerValidate(ANSWER_WRONG);
  }

  return (
    <AnswerStyle>
      <div className="answer-area">
        {answerValidate === NO_ANSWER ? (
          <button
            type="button"
            className="answer"
            onClick={() => validateIsCorrect(isCorrect)}
          >
            {answer}
          </button>
        ) : (
          <AnswerWrongOrCorrectStyle
            className="answer"
            colorValidate={answerValidate}
          >
            <span>
              {answer} - {why}
            </span>
          </AnswerWrongOrCorrectStyle>
        )}
      </div>
    </AnswerStyle>
  );
};

export default Answer;
