import React, { useState, useReducer } from "react";

const initialState = {
  counter: 0,
};

const CounterTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  RANDOM: "RANDOM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CounterTypes.INCREMENT: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case CounterTypes.DECREMENT: {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }
    case CounterTypes.RESET: {
      return initialState;
    }
    case CounterTypes.RANDOM: {
      return {
        ...state,
        counter: Math.floor(Math.random() * 100),
      };
    }
    default: {
      return state;
    }
  }
};

export const Counter = () => {
  // const [counter, setCounter] = useState(0);

  // const incrementar = () => {
  //   setCounter((prev) => prev + 1);
  // };

  // const decrementar = () => {
  //   setCounter((prev) => prev - 1);
  // };

  // const setAleatorio = () => {
  //   setCounter(Math.floor(Math.random() * 100));
  // };

  // const reset = () => {
  //   setCounter(0);
  // };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      {/* <span>valor: {counter}</span>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={setAleatorio}>Aleatorio</button> */}
      <span>valor: {state.counter}</span>
      <button
        onClick={() => dispatch({ type: CounterTypes.INCREMENT, payload: 1 })}
      >
        Incrementar
      </button>
      <button
        onClick={() => dispatch({ type: CounterTypes.DECREMENT, payload: 1 })}
      >
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: CounterTypes.RESET })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: CounterTypes.RANDOM })}>
        Aleatorio
      </button>
    </div>
  );
};
