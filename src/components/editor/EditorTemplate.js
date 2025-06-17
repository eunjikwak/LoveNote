import styled from "styled-components";

const EditorBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 768px) {
    .mobile-none {
      display: none;
    }
  }
`;
const EditorTemplate = ({ children }) => {
  return <EditorBlock>{children}</EditorBlock>;
};
export default EditorTemplate;
