import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  width: 100px;
`;

const LabeledField = ({ label, children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  );
};

export default LabeledField;
