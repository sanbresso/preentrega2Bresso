import { useState, useEffect } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(1);

  useEffect(() => {}, []);

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

  let objectProps = {
    restar,
    sumar,
    contador,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
