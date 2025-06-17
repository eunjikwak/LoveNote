import styled from "styled-components";

const SubTitleBlock = styled.div`
  font-size: clamp(20px, 5vw, 32px);
  margin-bottom: 20px;
  width: 100%;
  padding: 20px 24px;

  @media (max-width: 768px) {
    padding: 16px 12px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: clamp(16px, 6vw, 24px);
    padding: 12px 8px;
  }
`;

const SubTitle = ({ children }) => {
  return <SubTitleBlock>{children}</SubTitleBlock>;
};

export default SubTitle;
