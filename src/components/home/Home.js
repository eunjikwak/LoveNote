import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import styled from "styled-components";

const HomeWapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  gap: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(./home.jpg) center center / cover no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 40px;
  }
  .logo {
    height: 95px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      height: 60px;
    }

    @media (max-width: 480px) {
      height: 45px;
    }
  }
  .button-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    gap: 16px;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
const Home = ({ user }) => {
  return (
    <HomeWapper>
      <img src="./logo.png" className="logo" alt="" />
      <div className="button-box">
        {user ? (
          <Button to="/editor">청첩장 만들기</Button>
        ) : (
          <Button to="/login">청첩장 만들기</Button>
        )}
        {!user && (
          <Button
            bgcolor="#fff"
            textcolor={palette.colors.text.default}
            to="/login"
          >
            로그인하기
          </Button>
        )}
      </div>
    </HomeWapper>
  );
};

export default Home;
