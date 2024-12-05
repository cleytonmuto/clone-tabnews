import React, { useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("Clique no botão para obter um conselho (em inglês)!");

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("Falha ao obter conselho. Tente novamente.");
    }
  };

  return (
    <div className="advice-container">
      <div className="advice-box">
        <p className="advice-text">{advice}</p>
        <button onClick={getAdvice}>Obter conselho</button>
      </div>
    </div>
  );
}
