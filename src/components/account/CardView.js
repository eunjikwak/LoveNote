import styled from "styled-components";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";

const CardViewWapper = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.32);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  .left-box {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 16px;
    flex-wrap: wrap;
    img {
      width: 250px;
      object-fit: contain;
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .title {
      font-size: 32px;
    }
    .center-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .button-box {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  .right-box {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: center;
    gap: 20px;
    width: fit-content;
    .left-box {
      flex-direction: column;
      flex-wrap: wrap;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const ActionButton = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${(props) => props.color || "red"};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  border: 1px solid ${(props) => props.color || "red"};
  &:hover {
    background: ${palette.gray[0]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const CardView = () => {
  return (
    <CardViewWapper>
      <div className="left-box">
        <img src="./wedding.png" alt="이미지" />
        <div className="text-box">
          <div className="title">ㅇㅇㅇ님의 청첩장</div>
          <div className="center-box">
            <div>2025.06.11제작</div>
            <div>2025.10.10 결혼식</div>
            <div>D-100</div>
          </div>
          <div className="button-box">
            <Button bgcolor="#FBFACF" textcolor="#000" hoverbgcolor="#EFE47A">
              카카오로 공유하기
            </Button>
            <Button
              bgcolor={palette.colors.secondary}
              textcolor={palette.colors.primary}
            >
              링크로 공유하기
            </Button>
          </div>
          <div className="right-box">
            <ActionButton color={palette.colors.primary}>수정하기</ActionButton>
            <ActionButton color="red">삭제하기</ActionButton>
          </div>
        </div>
      </div>
    </CardViewWapper>
  );
};

export default CardView;
