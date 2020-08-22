import React, { useState, useReducer } from 'react';
import { AnswerStyle, AnswerWrongOrCorrectStyle } from './style'

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
  why
}: IAnswer) => {
  const [answerValidate, setAnswerValidate] = useState(0)

  function validateIsCorrect(pValidate: boolean) {
    pValidate ? setAnswerValidate(1) : setAnswerValidate(-1)
  }

  return (
    <AnswerStyle>
      <div className="answer-area">
          {
            answerValidate === 0 ?
            (
              <button className="answer" onClick={() => validateIsCorrect(isCorrect)}>
                { answer }
              </button>
            ) : (
              <AnswerWrongOrCorrectStyle className="answer" colorValidate={answerValidate}>
                <p>
                { answer } - { why }
                </p>
              </AnswerWrongOrCorrectStyle>
            )
          }
      </div>
    </AnswerStyle>
  )
}

export default Answer;
