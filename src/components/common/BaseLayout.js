import styled from "styled-components";
import palette from "../../lib/styles/palette";

const BaseLayoutBlock = styled.div`
  background: ${palette.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const BaseLayout = ({ children }) => {
  return <BaseLayoutBlock>{children}</BaseLayoutBlock>;
};

export default BaseLayout;
