import styled from 'styled-components';

interface IAnswerValidate {
  colorValidate: number;
}

export const AnswerStyle = styled.div`
  .answer-area {
    display: flex;

    .answer {
      width: 100%;
      margin-top: 1.5rem;
      padding: 1rem 2rem;
      font-size: 2rem;

      background: var(--color-title-white);

      border: 0.1rem solid var(--color-primary);
      border-radius: 0.8rem;
      opacity: 0.6;

      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ANSWER_RIGHT = 1;
export const AnswerWrongOrCorrectStyle = styled.p<IAnswerValidate>`
  text-align: center;
  border: 0.2rem solid;
  opacity: 1 !important;
  color: var(--color-title-white);
  background-color: ${props =>
    props.colorValidate === ANSWER_RIGHT
      ? 'var(--color-success-dark)'
      : 'var(--color-danger)'} !important;
  border-color: ${props =>
    props.colorValidate === ANSWER_RIGHT
      ? 'var(--color-success-dark)'
      : 'var(--color-danger)'} !important;
  box-shadow: 3px 3px 3px #c4c4c4;
`;
