import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState, useEffect } from "react";

function App() {
  const [tema, setTema] = useState(() =>{
    const temaGuardado = localStorage.getItem ("tema");
    return temaGuardado ? JSON.parse(temaGuardado) : true;
  });

  useEffect(()=>{
    localStorage.setItem("tema", JSON.stringify(tema));
  })

  const toggleTema = () => {
    setTema((tema) => !tema) 
  }


  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
    <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={true} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
