import styled from "styled-components";

const EditorBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;

  .accordion-container {
    width: 100%;
    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

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
