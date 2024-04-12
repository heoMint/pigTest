import { useNavigate } from 'react-router-dom';
import img from '../assets/Waddles.jpeg';
import styled from 'styled-components';

const Main = () => {
  const navigate = useNavigate();

  const navigateTestPage = () => {
    navigate('/question');
  };
  return (
    <>
      <main className='main'>
        <S.Title>
          <span>
            내가 만약 돼지라면 ? <br /> 나는 어떤 돼지일까 ? 🐷
          </span>
        </S.Title>
        <S.ImgWrapper className='img-box'>
          <img
            src={img}
            alt='img 화면에 꽉찬 돼지'
          />
        </S.ImgWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={navigateTestPage}>테스트하러가기</S.Button>
        </S.ButtonWrapper>
      </main>
    </>
  );
};

const S = {
  Title: styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 2.5rem;
    @media all and (max-width: 500px) {
      font-size: 1.3rem;
    }
  `,
  ButtonWrapper: styled.div`
    width: 30%;
    @media all and (max-width: 500px) {
      width: 200px;
    }
  `,
  Button: styled.button`
    padding: 15px;
    border-radius: 5px;
    @media all and (max-width: 500px) {
      height: 60px;
      border: 1px solid #979797;
      color: #303030;
    }
  `,
  ImgWrapper: styled.div`
    width: 40%;
    @media all and (max-width: 500px) {
      width: 90%;
    }
  `,
};
export default Main;
