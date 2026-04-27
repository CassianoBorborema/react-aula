import { useState } from "react";

function calcularIMC(peso: number, altura: number) {
  return peso / (altura * altura);
}

function classificarIMC(imc: number) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  }
  return "Obesidade";
}

function ExercicioTres() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcular = () => {
    if (peso > 0 && altura > 0) {
      const valorImc = calcularIMC(peso, altura);
      setImc(valorImc.toFixed(2));

      const textoClassificacao = classificarIMC(valorImc);
      setClassificacao(textoClassificacao);
    } else {
      alert("Por favor, insira valores maiores que zero.");
    }
  };

  const limpar = () => {
    setPeso("");
    setAltura("");
    setImc(null);
    setClassificacao("");
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <label>Peso (kg):</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(Number(e.target.value))}
      />
      <label>Altura (m):</label>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
      />
      <button onClick={calcular}>Calcular</button>
      <button onClick={limpar}>Limpar</button>

      {imc && <p>IMC: {imc}</p>}
      {classificacao && <p>Classificação: {classificacao}</p>}
    </div>
  );
}
export default ExercicioTres;
