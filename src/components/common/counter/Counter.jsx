import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Se debe seleccionar al menos 1 cantidad del producto");
    }
  };

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default Counter;
