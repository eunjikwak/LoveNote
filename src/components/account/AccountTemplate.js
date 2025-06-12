import styled from "styled-components";
import palette from "../../lib/styles/palette";

const AccountTemplateBlock = styled.div`
  background: ${palette.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;

  .page-title {
    font-size: 32px;
    margin-bottom: 20px;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 20px 16px;

    .page-title {
      text-align: center;
    }
  }
`;

const AccountTemple = ({ children }) => {
  return (
    <AccountTemplateBlock>
      <div className="page-title">나의 청첩장 목록</div>
      {children}
    </AccountTemplateBlock>
  );
};

export default AccountTemple;
