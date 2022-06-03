import React from "react";
import styled from "styled-components";
import { View } from "react-native";

function SeeREAL() {
  return (
    <>
      <Title>SeeREAL</Title>
      <SubTitle>I suggest, you just choose</SubTitle>
    </>
  );
}

const Title = styled(View)`
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
`;

const SubTitle = styled(View)`
  justify-content: center;
  font-size: 10px;
`;

export default SeeREAL;
