import styled from 'styled-components';

export const MainStyle = styled.div`
`;

export const SubTitle = styled.div`
  margin-top: 5rem;
  display: flex; flex-direction: column;
  align-items: center;
  .title {
    font-size: 5rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
  }
`;

export const PrimaryDeck = styled.div`
  display: flex; align-items: center; justify-content: center;
  width: 100%;
  margin-top: 5rem;
  .mg {
    margin: 0 2rem;
  }
`;

export const FinalText = styled.div`
  margin: 5rem 0;
  width: 100%;
  display: flex; flex-direction: column; align-items: center;
  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .text {
    max-width: 980px;
  }
`;
