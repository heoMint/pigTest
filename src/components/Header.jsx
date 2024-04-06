import styled from "styled-components";

// 내가 만약 돼지라면? -> 테스트 내내 따라다닐 것
const Header = () => {
  return (
    <>
      <S.Title>나는 어떤 돼지일까? 🐷</S.Title>
    </>
  );
};

export default Header;

const S = {
  Title: styled.div`
    margin-top: 10px;
    font-size: 2rem;
  `,
};
