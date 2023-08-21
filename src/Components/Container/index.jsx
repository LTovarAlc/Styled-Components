import React from "react";
import styled from "styled-components"
import Title from "../Title";
import Account from "../Account";


const StyledContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const StylesContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <div className="container">
      <Title>Smart Bank</Title>
      <section className="content">
        <Account />
      </section>
    </div>
  );
};

export default Container;
