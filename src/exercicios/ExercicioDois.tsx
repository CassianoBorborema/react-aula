import { useState } from "react";

function ExercicioDois() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const formularioValido = nome.length >= 3 && email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(true);
    setNome("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>
            <label>
              text input:{" "}
              <input
                name="nome"
                type="text"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  setEnviado(false);
                }}
              />
            </label>
            <label>
              text input:{" "}
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEnviado(false);
                }}
              />
            </label>
          </h1>
          <button type="submit" disabled={!formularioValido}>
            Enviar
          </button>
          {enviado && <p> Sucesso</p>}
          {!enviado && <p>Falha</p>}
        </div>
      </form>
    </>
  );
}

export default ExercicioDois;
