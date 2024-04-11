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
        <S.Title>내가 만약 돼지라면? 나는 어떤 돼지일까 ?🐷</S.Title>
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
  Title: styled.p`
    margin-top: 30px;
    font-size: 2rem;
  `,
  ButtonWrapper: styled.div`
    width: 30%;
  `,
  Button: styled.button`
    padding: 15px;
  `,
  ImgWrapper: styled.div`
    width: 50%;
  `,
};
export default Main;
