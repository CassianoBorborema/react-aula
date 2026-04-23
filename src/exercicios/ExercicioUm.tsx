import { useState } from "react";

const MINIMO = 0;
const MAXIMO = 10;

function ExercicioUm() {
  const [contador, setContador] = useState(0);

  // Ajustado para usar chaves {} em vez de parênteses ()
  const incrementar = () => {
    if (contador < MAXIMO) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > MINIMO) {
      setContador(contador - 1);
    }
  };

  const resetar = () => {
    setContador(0);
  };

  // Lógica de mensagem simplificada
  let mensagemLimite = "Faixa normal";
  if (contador === MINIMO) mensagemLimite = "Mínimo atingido";
  if (contador === MAXIMO) mensagemLimite = "Máximo atingido";

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-4xl font-bold">{contador}</h1>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={incrementar}
        >
          +1
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={decrementar}
        >
          -1
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          onClick={resetar}
          disabled={contador === 0}
        >
          Reset
        </button>
      </div>

      <p className="text-xl font-medium mt-2 text-gray-700">{mensagemLimite}</p>
    </div>
  );
}

export default ExercicioUm;
