import './App.css';
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { useState } from 'react';


function App() {
  const [btnLabel, setBtnLabel] = useState("Clique aqui")

  const btnClick = () => {
    setBtnLabel("Clique aqui")
    alert("A label desse botão é Baixar CV")
  }
  return (
    <>
      <Card text="Desafio de React do DevQuest. Primeiro: colocar este texto todo em maiúsculo e mudar a cor. Segundo: ao clicar no botão abaixo, mostrar um alert com uma msg de label" color="red" />

      <Button onClick={btnClick} label={btnLabel} />
    </>
  )
}

export default App
