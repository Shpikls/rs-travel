import React from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Slider} from "./Slider";
import {Stories} from "./Stories";
import {Trip} from "./Trip";

function App() {
  return (
    <>
      <Header/>
      <Trip/>
      <Slider/>
      <Stories/>
      <Footer/>
    </>
  );
}

export default App;
